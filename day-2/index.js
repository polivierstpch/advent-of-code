const fs = require('fs');
const Submarine = require('./Submarine');

const filename = 'input.txt';
const commands = fs.readFileSync(filename, 'utf-8')
                 .split('\n');


const sub = new Submarine();

sub.handleCommands(commands);

console.log(sub.getSubmarineCourse())
