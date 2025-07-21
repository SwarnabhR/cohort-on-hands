const { Command } = require('commander');
const fs = require('fs');

const program = new Command();

program
    .name('counter')
    .description('CLI to do file based operations')
    .version('0.8.0');

program
    .command('count')
    .argument('<file>', 'File to count lines in')
    .description('Count the number of lines in a file')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                return;
            } else {
                const lines = data.split('\n').length;
                console.log(`The file ${file} has ${lines} lines.`);
            }
        });
    });

program.parse();