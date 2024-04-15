import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\t Welcome to Qurat_currency convertor \n\t "));
let exchange_rate:any={
    "USD":1,
    "EUR":0.9,
    "JYP":113,
    "CAD":1.3,
    "AUD":1.65,
    "GBP":0.76,
    "PKR":277.95,
}
let user_ans=await inquirer.prompt([{
    name:"from",
    type:"list",
    message:"Enter from currency",
    choices:["USD","EUR","JYP","CAD","AUD","GBP","PKR"],

},
{
    name:"to",
    type:"list",
    message:"Enter to currency",
    choices:["USD","EUR","JYP","CAD","AUD","GBP","PKR"],
},
{
    name:"amount",
    message:"Enter your currency",
    type:"input",

},
]);

let fromAmount=exchange_rate[user_ans.from];
let toAmount=exchange_rate[user_ans.to];
let amount=user_ans.amount

//formula
let baseAmount=amount/fromAmount
let convertedAmount=baseAmount*toAmount

console.log(`Converted amount =${convertedAmount.toFixed(2)}`);


