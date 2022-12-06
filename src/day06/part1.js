// Advent of Code - Day 6 - Part One
const DIFFERENTS = 4

export function part1(input) {
  for(let i = 0; i < input.length-DIFFERENTS; i++) {
    const message = input.slice(i, i+DIFFERENTS)
    if(message.length === (new Set(message)).size)
      return i+DIFFERENTS
  }

  return -1;
}
