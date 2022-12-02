// Advent of Code - Day 2 - Part Two

export function part2(input) {
  const rounds = input.split('\r\n')
  const scores = rounds.map( strRound => {
    const [oponnentPlay, roundResult] = strRound.split(" ")
    let score = roundResult === 'X' ? 0 : ( roundResult === 'Y' ) ? 3 : 6

    // Shape Score: (1 for Rock, 2 for Paper, and 3 for Scissors)
    if ((roundResult === 'X' && oponnentPlay === 'B') || 
        (roundResult === 'Y' && oponnentPlay === 'A') || 
        (roundResult === 'Z' && oponnentPlay === 'C'))
      score += 1

    if ((roundResult === 'X' && oponnentPlay === 'C') || 
        (roundResult === 'Y' && oponnentPlay === 'B') || 
        (roundResult === 'Z' && oponnentPlay === 'A'))
      score += 2

    if ((roundResult === 'X' && oponnentPlay === 'A') || 
        (roundResult === 'Y' && oponnentPlay === 'C') || 
        (roundResult === 'Z' && oponnentPlay === 'B'))
      score += 3

    return score
  })

  return scores.reduce((prev, current) => prev + current, 0);
}
