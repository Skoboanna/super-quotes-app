const addCommand = require("./commandHandlers/addNewQuote");
const quotesCommand = require("./commandHandlers/quotesReader/quotesReader");
const quotesAuthorCommand = require("./commandHandlers/quotesReader/quotesByAuthorReader");

require("yargs")
  .command(addCommand)
  .command(quotesCommand)
  .command(quotesAuthorCommand)
  .demandCommand(1, "You need at least one command before moving on")
  .help().argv;
