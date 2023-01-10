const inquirer = require('inquirer');
const fetch = require('node-fetch');
require('dotenv').config()

const prompt = [{
    type: 'input',
    name: 'query',
    message: 'q'
}];


async function runPrompt(){
    console.log('NOW CHATTING WITH CODEX')
    const resolve = await inquirer.prompt(prompt)
    const response = await fetch('http:localhost:6969', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify(resolve)
    });
    if (response.ok) {
        const data = await response.json();
        const parsed_data = data.bot.trim();
        console.log(parsed_data)
    }
};

runPrompt()
