//put dice in array to pull from
let dice = [
  {
    di: "&#9856",
    value: 1,
  },
  {
    di: "&#9857",
    value: 2,
  },
  {
    di: "&#9858",
    value: 3,
  },
  {
    di: "&#9859",
    value: 4,
  },
  {
    di: "&#9860",
    value: 5,
  },
  {
    di: "&#9861",
    value: 6,
  },
];
//grab from html
let rollTheDiceButton = document.getElementById("roll-button");
let enteredDiceNum = document.getElementById("enter-dice-num");

//cypress looking for hashtag paras
const diceElement = document.querySelector("#dice-para");
const sumStorage = document.querySelector("#sum-para");

//list
const ul = document.createElement("ul");
document.body.appendChild(ul);

//execute function onclick
rollTheDiceButton.addEventListener("click", () => {
  rollTheDice();
});

//make function with a loop to randomize rolls and store cumulative value
function rollTheDice() {
  diceElement.innerHTML = "";
  let sum = 0;
  //no need to roll multiple dice, same result as rolling one multiple times
  //loop runs as many times as number of dice to simulate this
  for (let i = 0; i < enteredDiceNum.value; i++) {
    let generateRoll = Math.floor(Math.random() * 6);

    diceElement.innerHTML += dice[generateRoll].di;
    sum += dice[generateRoll].value;
  }
  sumStorage.textContent = `The sum of this roll is = ${sum}`;
  let rollCount = 0;
  rollCount++;

  //history
  if (rollCount > 0) {
    const list = document.createElement("li");
    ul.appendChild(list);
    list.textContent = `${diceElement.innerHTML} ${sumStorage.textContent}`;
  }
}
