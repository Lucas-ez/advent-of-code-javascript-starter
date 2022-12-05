// Advent of Code - Day 5 - Part Two

const cargarPilas = (arrayInput, posDivide) => {
  const cajasInput = arrayInput.slice(0, posDivide)

  const columnasInput = cajasInput[cajasInput.length-1].split('')
  const pilas = []
  // Creo una pila por cada columna
  for(let i = 1; i < columnasInput.length; i+=4) {
    pilas.push([])
  }

  // Lleno las pilas con las cajas
  for(let i = cajasInput.length-2; i >= 0; i--) {
    const filaInput = cajasInput[i].split('')

    for(let j = 1, k = 0; j < filaInput.length; j += 4, k++) {
      if(filaInput[j] !== ' ') {
        // j-1-3k Me da el número de fila en el que va la caja
        pilas[j-1-3*k].push(filaInput[j])
      }
    }
  }

  return pilas

}

const cargarMovimientos = (arrayInput, posDivide) => {
  const movimientos = arrayInput.slice(posDivide + 1, arrayInput.length).map((strMov) => {
    const arrayMov = strMov.split(' ');
    const objMov = {}

    objMov['move'] = parseInt(arrayMov[1])
    objMov['from'] = parseInt(arrayMov[3] - 1)
    objMov['to'] = parseInt(arrayMov[5] - 1)

    return objMov
  })

  return movimientos
}

export function part2(input) {
  const arrayInput = input.split('\r\n')
  const posDivide = arrayInput.indexOf('')

  // Cargo los datos de forma más cómoda
  const pilas = cargarPilas(arrayInput, posDivide)
  const movimientos = cargarMovimientos(arrayInput, posDivide)

  movimientos.forEach((mov) => {
    const pilaAux = []
    for(let i = 0; i < mov['move']; i++) {
      const box = pilas[mov['from']].pop()  // saco de from
      pilaAux.push(box)                     // pongo en pila auxiliar
    }

    while(pilaAux[0]) {
      const box = pilaAux.pop()             // saco de la pila auxiliar
      pilas[mov['to']].push(box)            // pongo en to
    }

  })

  const resultados = pilas.map(pila => pila.pop())

  return resultados.join('');
}
