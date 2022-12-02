// Advent of Code - Day 2 - Part One

/*
  First column -> oponnent play
  A: Rock, B: Paper, C: Scissors

  Second column -> my play
  X: Rock, Y: Paper, Z: Scissors

  Shape Score: (1 for Rock, 2 for Paper, and 3 for Scissors)
  Plus Score: (0 if you lost, 3 if the round was a draw, and 6 if you won)

  Round Score = Shape Score + Plus Score
*/

export function part1(input) {
  const rounds = input.split('\r\n')
  const scores = rounds.map( strRound => {
    const [oponnentPlay, myPlay] = strRound.split(" ")
    let score = myPlay === 'X' ? 1 : ( myPlay === 'Y' ) ? 2 : 3

    if ((myPlay === 'X' && oponnentPlay === 'A') || 
        (myPlay === 'Y' && oponnentPlay === 'B') || 
        (myPlay === 'Z' && oponnentPlay === 'C'))
      score += 3

    if ((myPlay === 'X' && oponnentPlay === 'C') || 
        (myPlay === 'Y' && oponnentPlay === 'A') || 
        (myPlay === 'Z' && oponnentPlay === 'B'))
      score += 6

    return score
  })

  return scores.reduce((prev, current) => prev + current, 0);
}
