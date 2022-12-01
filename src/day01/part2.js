// Advent of Code - Day 1 - Part Two

export function part2(input) {
  const array = input.split('\r\n')
  const elfos = [0]

  for( let i = 0; i < array.length; i++ ) {
    if(array[i] === '')
      elfos.push(0)
    else
      elfos[elfos.length - 1] += parseInt(array[i])
  }

  //hacer mi math.max

  const mayores = [0, 0, 0]

  for( let i = 0; i < elfos.length; i++ ) {
    if(elfos[i] > mayores[0]) {
      mayores[2] = mayores[1]
      mayores[1] = mayores[0]
      mayores[0] = elfos[i]
    } else if(elfos[i] > mayores[1]) {
      mayores[2] = mayores[1]
      mayores[1] = elfos[i]
    } else if(elfos[i] > mayores[2]) {
      mayores[2] = elfos[i]
    }
  }


  return mayores.reduce( (acum, value) => acum + value, 0);
}
