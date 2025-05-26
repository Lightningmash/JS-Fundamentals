const numArg = process.argv.length - 2; // Corrected: process.argv

if (numArg === 0) {
    console.log('No argument');
} else if (numArg === 1) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
