// Advent of Code - Day 8 - Part One

function cloneSize(mat) {
  // creo otra matriz con el mismo tamaño
  const matAux = mat.map(r => r.map( e => 0))
  return matAux
}

function getHeightTop(mat) {
  const matAux = cloneSize(mat)

  // clono primera linea de arriba a abajo
  const pos = 0
  for (let j = 0; j < mat[pos].length; j++) {
    matAux[pos][j] = mat[pos][j]
  }

  // completo con las demás
  for (let i = pos + 1; i < mat.length; i++) {
    for (let j = 0; j < mat[pos].length; j++) {
      matAux[i][j] = (mat[i][j] > matAux[i-1][j] ? mat[i][j] : matAux[i-1][j])
    }
  }

  return matAux;
}

function getHeightBot(mat) {
  const matAux = cloneSize(mat)

  // clono primera linea de abajo a arriba
  const pos = mat.length-1
  for (let j = 0; j < mat[pos].length; j++) {
    matAux[pos][j] = mat[pos][j]
  }

  // completo con las demás
  for (let i = pos - 1; i >= 0; i--) {
    for (let j = 0; j < mat[pos].length; j++) {
      matAux[i][j] = (mat[i][j] > matAux[i+1][j] ? mat[i][j] : matAux[i+1][j])
    }
  }

  return matAux;
}

function getHeightLeft(mat) {
  const matAux = cloneSize(mat)

  // clono primera linea de izquierda a derecha
  const pos = 0
  for (let i = 0; i < mat.length; i++) {
    matAux[i][pos] = mat[i][pos]
  }

  // completo con las demás
  for (let i = 0; i < mat.length; i++) {
    for (let j = pos + 1; j < mat[i].length; j++) {
      matAux[i][j] = (mat[i][j] > matAux[i][j-1] ? mat[i][j] : matAux[i][j-1])
    }
  }

  return matAux;
}

function getHeightRight(mat) {
  const matAux = cloneSize(mat)

  // clono primera linea de derecha a izquierda
  for (let i = 0; i < mat.length; i++) {
    matAux[i][mat[i].length - 1] = mat[i][mat[i].length - 1]
  }

  // completo con las demás
  for (let i = 0; i < mat.length; i++) {
    for (let j = mat[i].length - 2; j >= 0; j--) {
      matAux[i][j] = (mat[i][j] > matAux[i][j+1] ? mat[i][j] : matAux[i][j+1])
    }
  }

  return matAux;
}

function searchVisibles(mat, matHTop, matHBot, matHRight, matHLeft) {
  let cont = mat.length*2 + mat[0].length*2 - 4

  for(let i = 1; i < mat.length - 1; i++){
    for(let j = 1; j < mat[i].length - 1; j++) {
      if(mat[i][j] > matHTop[i-1][j] 
        || mat[i][j] > matHBot[i+1][j] 
        || mat[i][j] > matHRight[i][j+1] 
        || mat[i][j] > matHLeft[i][j-1])
        cont++
    }
  }


  return cont
}

export function part1(input) {
  const matInput = input.split('\r\n').map(e => e.split('').map(e => Number(e)));

  const matHTop = getHeightTop(matInput) 
  const matHBot = getHeightBot(matInput) 
  const matHLeft = getHeightLeft(matInput)
  const matHRight = getHeightRight(matInput)

  const visibles = searchVisibles(matInput, matHTop, matHBot, matHRight, matHLeft)

  return visibles;
}
