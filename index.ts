import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "please enter you pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Wellcome to HBL ATM");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "what do you want",
      type: "list",
      choices: ["withdraw", "fastcash", "balance inquiry", "exit"],
    },
  ]);

  console.log(operationAns.operation);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter you amount",
        type: "number",
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance");
    }

    myBalance -= amountAns.amount;
    console.log("Your Remaining Balance is " + myBalance);
  } else if (operationAns.operation === "fastcash") {
    let cashFast = await inquirer.prompt([
      {
        name: "cash",
        message: "your amount",
        type: "list",
        choices: ["1000", "2000", "3000", "5000", "10000", "20000"],
      },
    ]);
    myBalance -= cashFast.cash;
    console.log("Your Remaining Balance is " + myBalance);
  } else if (operationAns.operation === "balance inquiry") {
    console.log("Your available balance is " + myBalance);
  } else if (operationAns.operation === "exit") {
    console.log("Thank you for using HBL ATM");
  }
} else {
  console.log("Incorrect Pin");
}
