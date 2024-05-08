function tournamentWinner (competitions,results){
    const scores={}
    let winner=''
    for (let i=0; i < competitions.length; i++) {
        const[home,away] = competitions[i]
        console.log(i, [home,away])
        const winningTeam = results[i]===0 ? away : home
        console.log(winningTeam)
        scores[winningTeam] = (scores[winningTeam] || 0)+3
        console.log(scores)
        console.log(winner)
        if(!winner || scores[winningTeam] > scores[winner]) {
            winner = winningTeam
        }
        console.log(winner)
    }
    return winner
}

const competitions = [['JavaScript','C#'],['C#','Python'],['Python','JavaScript']]
const results=[0,0,1]
console.log(tournamentWinner(competitions,results))