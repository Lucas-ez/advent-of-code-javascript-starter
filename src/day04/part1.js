// Advent of Code - Day 4 - Part One

export function part1(input) {
  const arrayInput = input.split('\r\n')
  const fullyContains = arrayInput.reduce((cont, pair) => {
    const [firstRange, secondRange] = pair.split(',').map(range => range.split('-').map(strNum => parseInt(strNum)))

    let isFullyContained = (firstRange[0] <= secondRange[0] && firstRange [1] >= secondRange[1])
                            || (secondRange[0] <= firstRange[0] && secondRange [1] >= firstRange[1])

    return cont + (isFullyContained ? 1 : 0)
  }, 0)

  return fullyContains;
}
