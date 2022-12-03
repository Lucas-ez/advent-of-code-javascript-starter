// Advent of Code - Day 3 - Part One

export function part1(input) {
  const arrayInput = input.split('\r\n')
  const priorities = arrayInput.map( rucksack => {
    const [first, second] = [rucksack.slice(0, rucksack.length/2), rucksack.slice(rucksack.length/2)]

    for(let i = 0; i < first.length; i++) {
      for(let j = 0; j < second.length; j++){
        if(first[i] === second[j]) {
          let parcialPriority = first[i].charCodeAt(0) - 96
          return parcialPriority > 0 ? parcialPriority : parcialPriority + 58
        }
      }
    }
    return 0
  })

  return priorities.reduce((prev, curr) => prev + curr, 0);
}
