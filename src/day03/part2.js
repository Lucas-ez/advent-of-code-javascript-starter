// Advent of Code - Day 3 - Part Two

export function part2(input) {
  const arrayInput = input.split('\r\n')

  const priorities = []

  for ( let i = 0; i < arrayInput.length; i+=3 ) {
    const [first, second, third] = [arrayInput[i], arrayInput[i+1], arrayInput[i+2]]

    for(let i = 0; i < first.length; i++) {
      for(let j = 0; j < second.length; j++) {
        if(first[i] === second[j]) {
          for(let k = 0; k < third.length; k++) {
            if(first[i] === third[k]){
              let parcialPriority = first[i].charCodeAt(0) - 96
              let priority = parcialPriority > 0 ? parcialPriority : parcialPriority + 58
              priorities.push(priority)
              i = first.length
              k = third.length
              j = second.length
            }
          }
        }
      }
    }
  }

  return priorities.reduce((prev, curr) => prev + curr, 0);
}
