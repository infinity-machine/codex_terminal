const inquirer = require('inquirer');


const prompt = [{
    type: 'input',
    name: 'q',
    message: 'q'
}];


function runPrompt(){
    return inquirer.prompt(prompt)
    .then(()=> {
        console.log('HERE IS WHERE THE ANSWER WILL GO')
        runPrompt();
    });
}

runPrompt()