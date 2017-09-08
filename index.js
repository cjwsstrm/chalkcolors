var chalk = require('chalk');

var coolFunction = require('../lecture/dependency');
var uncoolFunction = require('../lecture/dependency2');

var message = chalk.green.underline('Hello ') + chalk.strikethrough.yellow("World");

var success = chalk.bold.blueBright;

var message2 = chalk.red(',\n\n\n Check') + chalk.bold.dim(' out' ) + chalk.cyan.bgWhite('all of these colours') + chalk.bgMagenta('\n\n\n <<MAGENTA>>') + chalk.bold.yellow.bgBlue('Swedish colors!');
console.log(coolFunction(message + message2 + (success("\n\n\n success!"))));
