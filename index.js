const inquirer = require('inquirer');
const fetch = require('node-fetch');
const figlet = require('figlet');
const chalk = require('chalk');
require('dotenv').config()

const prompt = [{
    type: 'input',
    name: 'query'
}];

function exitPrompt() {
    console.log('GOODBYE');
    process.exit(0)
}

async function runPrompt(){
    const resolve = await inquirer.prompt(prompt)
    if (resolve.query === 'EXIT') exitPrompt()
    const response = await fetch('http://localhost:6969', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(resolve)
    });
    if (response.ok) {
        const data = await response.json();
        const parsed_data = data.bot.trim();
        console.log(parsed_data)
    }
    runPrompt()
};

console.log('YOU ARE NOW CHATTING WITH CODEX TERMINAL')
runPrompt()
