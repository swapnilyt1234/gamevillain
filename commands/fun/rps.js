exports.run = async (client, message, args) => {
  let state;
  const replies = ["Rock!", "Paper!", "Scissors!"];
  const reply = replies[Math.floor(Math.random() * replies.length)];
  if (!args[0])
    return message.channel.send("You need to choose Rock, Paper or Scissors");
  let usr = args[0].toLowerCase();
  let options = ["rock", "paper", "scissors"];
  if (!options.includes(usr))
    return message.reply(
      "Is that a thing? There are only three options: Rock, Paper and Scissors"
    );
  if (usr == "rock" && reply == "Paper!") state = "You lost!";
  if (usr == "rock" && reply == "Scissors!") state = "You won!";
  if (usr == "rock" && reply == "Rock!") state = "Tie!";
  if (usr == "paper" && reply == "Paper!") state = "Tie!";
  if (usr == "paper" && reply == "Scissors!") state = "You lost!";
  if (usr == "paper" && reply == "Rock!") state = "You won!";
  if (usr == "scissors" && reply == "Paper!") state = "You lWon!";
  if (usr == "scissors" && reply == "Scissors!") state = "Tie!";
  if (usr == "scissors" && reply == "Rock!") state = "You Lost!";
  message.channel.send({
    embed: { title: reply, color: "RANDOM", description: state }
  });
};

exports.help = {
  name: "rps",
  descrdescriptioniption: "Play Rock Paper Scissors",
  usage: "?rps"
};

exports.conf = {
  aliases: [],
  cooldown: 1
};
