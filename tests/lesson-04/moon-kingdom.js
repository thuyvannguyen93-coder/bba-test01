function createCharacters() {
 const characters = [
    { name: "Mario", level: 10, health: 300 },
    { name: "Van", level: 8, health: 250 },
    { name: "Kina", level: 20, health: 600 }
  ];
 const charactersPowerUp = characters.map(char => ({
  name: char.name.toUpperCase(),
  level: char.level*2,
  health: char.health*3
 }));
 const possibleWinners = charactersPowerUp.filter(char => char.health >1000);
return { charactersPowerUp, possibleWinners };
 }
// console.log(createCharacters());

function printLeaderboard() {
  const players = [
    {name: "Mario", score: "1000"},
    {name: "Van", score: "200"},
    {name: "Kina", score: "400"},
    {name: "Linh", score: "300"}
  ];
  //dung ham sort
  const sortedPlayers = players.sort((a, b) => b.score - a.score);
  const medals = ["🥇", "🥈", "🥉"];
  let result = "";
  for(let i = 0 ; i < players.length; i++) {
    let str = "";
    if ( i <= 2 ){
      str += medals[i]
    } else {
      str += "  ";
    }
    str += " " + (i + 1) + ". " + players[i].name + " - " + players[i].score + " pts" + "\n";
    result += str;
  }
  return result;
}
console.log(printLeaderboard());