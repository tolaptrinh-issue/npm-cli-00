const yargs = require('yargs');
const chalk = require('chalk');

// Cấu hình các tùy chọn dòng lệnh
yargs.command({
  command: 'log',
  describe: 'Show log messages',
  builder: {
    level: {
      describe: 'Log level',
      demandOption: true,
      type: 'string',
      choices: ['info', 'warn', 'error']
    },
    message: {
      describe: 'Message to display',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    const { level, message } = argv;
    if (level === 'info') {
      console.log(chalk.blue(`INFO: ${message}`));
    } else if (level === 'warn') {
      console.log(chalk.yellow(`WARN: ${message}`));
    } else if (level === 'error') {
      console.log(chalk.red(`ERROR: ${message}`));
    }
  }
});

// Parse arguments
yargs.parse();
