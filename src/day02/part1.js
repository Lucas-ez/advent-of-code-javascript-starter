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
    const [opponentPlay, myPlay] = strRound.split(" ")
    let score = myPlay === 'X' ? 1 : ( myPlay === 'Y' ) ? 2 : 3

    console.log(strRound);

    if ((myPlay === 'X' && opponentPlay === 'A') || 
        (myPlay === 'Y' && opponentPlay === 'B') || 
        (myPlay === 'Z' && opponentPlay === 'C'))
      score += 3

    if ((myPlay === 'X' && opponentPlay === 'C') || 
        (myPlay === 'Y' && opponentPlay === 'A') || 
        (myPlay === 'Z' && opponentPlay === 'B'))
      score += 6

    return score
  })

  return scores.reduce((prev, current) => prev + current, 0);
}
