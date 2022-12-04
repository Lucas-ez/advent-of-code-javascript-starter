// Advent of Code - Day 4 - Part Two

export function part2(input) {
  const arrayInput = input.split('\r\n')
  const fullyContains = arrayInput.reduce((cont, pair) => {
    const [firstRange, secondRange] = pair.split(',').map(range => range.split('-').map(strNum => parseInt(strNum)))
    
    let overlap = !(firstRange[0] > secondRange[1] || firstRange[1] < secondRange[0])

    return cont + (overlap ? 1 : 0)
  }, 0)
  
  return fullyContains;
}
