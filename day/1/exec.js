const fs = require('fs/promises');

const intMatchPattern = /(?=(0|1|2|3|4|5|6|7|8|9|zero|one|two|three|four|five|six|seven|eight|nine))/g; // Use global to match all

function convertPotentialIntegerName(input) {
    switch (input) {
        case 'zero':
            return '0';

        case 'one':
            return '1';

        case 'two':
            return '2';

        case 'three':
            return '3';

        case 'four':
            return '4';

        case 'five':
            return '5';

        case 'six':
            return '6';

        case 'seven':
            return '7';

        case 'eight':
            return '8';

        case 'nine':
            return '9';

        default:
            return input;
    }
}

(async function main (){
    // Read input file
    const lines = (await fs.readFile('day/1/input.txt', {encoding: 'utf-8'})).split('\n');

    // Reduce and aggregate
    const outcome = lines.reduce((previous, current) => {
        // Extract matches
        let matches = Array.from(current.matchAll(intMatchPattern));

        if (!matches.length) {
            return previous;
        }

        // Extract first and last match
        let first = matches.shift()[1];
        let last = matches.length ? matches.pop()[1] : first;

        // Create two digit integer from first and last match
        let combinedInteger = Number(convertPotentialIntegerName(first) + convertPotentialIntegerName(last));
        let next = Number(previous) + combinedInteger;

        console.log('----------------------');
        console.log('Previous', Number(previous));
        console.log(`Current: ${current}`);
        console.log('Current transformed', combinedInteger);
        console.log('Next', next);

        return next;
    }, '');

    console.log('Final Result: ', outcome);
})()
