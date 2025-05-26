const message = 'C is fun';

const argCount = process.argv[2];
const x = parseInt(argCount);

if (isNaN(x)) {
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < x; i++) {
        console.log(message);
    }
}
