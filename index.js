var readlineSync = require("readline-sync");

var chalk = require("chalk");

var named = readlineSync.question("what is your name: ");

console.log(chalk.cyanBright("Hello " + named))

console.log(chalk.cyanBright("i hope you are doing good "))


// var about = readlineSync.question(question);
  
console.log(chalk.bgMagentaBright("This is a quiz about cricket. let's see how much you could score"));

console.log("lets start")

console.log("give your answers in  words")

console.log("----------------------")

var score = 0;

{
  function play(question1, answer1)
{
var about = readlineSync.question(question1);

  if (about === answer1)
  {
  console.log(chalk.green("right"));
  score = score + 1;
  console.log("current score: ", score);
  console.log("---------------")
  }
  else
  {
    console.log(chalk.red("wrong"));
    score = score +0;
    console.log("current score: ", score);
    console.log("---------------")
  }

}

play("number of players in a cricket team ", "eleven")
play("how many balls in an over ", "six")
play("how many bails are there over stumps on both ends ","four")
play("how many umpires will be present on the ground during a match ", "two")
play("after which ball a free hit is given ", "no ball")
}

console.log(chalk.bgMagentaBright("your total score: ", score))

if (score >= 4)
  {
  console.log(chalk.bgMagentaBright("you have reached level two"));
  console.log("-----------")

  {
  function play(question2, answer2)
{
var about = readlineSync.question(question2);

  if (about === answer2)
  {
  console.log(chalk.green("right"));
  score = score + 1;
  console.log("current score: ", score);
  console.log("-----------")
  }
  else
  {
    console.log(chalk.red("wrong"));
    score = score +0;
    console.log("current score: ", score);
    console.log("-----------")
  }

}

play("whaen does india won its first world cup 1975 1979 1983 1987 1991  ", "1983")
play("first world cup winning captain for india ","kapil dev")
play("who is present indian captain ", "virat kohli")
play("2011 world cup winning captain jersey number ", "seven")
play("five time ipl winning team present captain ", "rohit sharma")
}

console.log(chalk.bgYellow("your total score: ", score))
console.log("congratulations that's a good score")
  }
  else
  {
    console.log(chalk.bgMagentaBright("sorry, you can't reach level two"));
    console.log("---------------")
  }

