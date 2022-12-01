// Advent of Code - Day 1 - Part One

export function part1(input) {
  
  const array = input.split('\r\n')
  const elfos = [0]

  for(let i = 0; i < array.length; i++) {
    if(array[i] === '')
      elfos.push(0)
    else
      elfos[elfos.length - 1] += parseInt(array[i])
  }

  return Math.max(...elfos);
}
