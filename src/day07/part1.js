// Advent of Code - Day 7 - Part One

/*
  cd      - cambia directorio
  ls      - lista los archivos del directorio
  123 abc - archivo de nombre "abc" y tamaño "123"
  dir xyz - directorio de nombre "xyz"
*/

class Nodo {
  constructor(name, type, content = []) {
    this.name = name
    this.type = type
    this.content = content
  }

  addContent(newContent) {
    if(this.type === 'dir') 
      this.content = [...this.content, newContent]
    else
      console.log('Error, no es un directorio');
  }

  getDir(name) {
    return this.content.filter(child => child.name === name && child.type === 'dir')[0]
  }

  getAllDirSize() {
    if(this.type === 'file') return 

    const childDirs = this.content.filter(child => child.type === 'dir')

    if(childDirs.length === 0) {
      return [{
        name: this.name, 
        size: this.content.reduce((acum, child) => acum + child.getSize(),0)
      }]
    } else {
      const sizes = []
      childDirs.forEach(child => sizes.push(...child.getAllDirSize()))
      return [{name: this.name, size: this.getSize()},...sizes]
    }
  }

  getSize() {
    if(this.type === 'file') 
      return this.content
    if(this.type === 'dir') {
      return this.content.reduce((acum, child) => acum + child.getSize(), 0)
    }
  }

}

const cargarArchivos = (archivos, arrayInput) => {
  let recorre = archivos
  const atras = []
  
  arrayInput.forEach(strLinea => {
    const linea = strLinea.split(' ')
    
    switch(linea[0]) {
      case '$' : // Comando
        if(linea[1] === 'cd') {
          if(linea[2] === '/') { // Para ir a la raíz
            while(atras.length !== 0) {
              recorre = atras.pop()
            }
          } else if(linea[2] === '..') { // Un paso atras
            recorre = atras.pop()
          } else { // Entrar en un directorio
            atras.push(recorre)
            recorre = recorre.getDir(linea[2])
          }
        } else if(linea[1] === 'ls') {
          // por ahora nada
        }
        break;
      case 'dir': // Directorio
        recorre.addContent(new Nodo(linea[1],'dir'))
        break;
      default: // Archivo (file)
        recorre.addContent(new Nodo(linea[1],'file', parseInt(linea[0])))
    }
  });
}

export function part1(input) {
  const arrayInput = input.split('\r\n')
  const archivos = new Nodo ('/','dir')

  cargarArchivos(archivos, arrayInput)
  const sizes = archivos.getAllDirSize();

  return sizes.filter(dir => dir.size <= 100000).reduce((acum, dir) => acum + dir.size ,0);
}
