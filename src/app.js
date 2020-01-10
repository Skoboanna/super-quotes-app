const addCommand = require("./commandHandlers/addNewQuote");
const removeCommand = require("./commandHandlers/removeQuoteById");
const quotesCommand = require("./commandHandlers/quotesReader/quotesReader");
const quotesAuthorCommand = require("./commandHandlers/quotesReader/quotesByAuthorReader");
const randomQuoteCommand = require("./commandHandlers/quotesReader/randomQuoteReader");
const externalQuoteCommand = require("./commandHandlers/quotesReader/externalQuoteReader");
const quotesGenreCommand = require("./commandHandlers/quotesReader/quotesByGenreReader");

require("yargs")
  .command(addCommand)
  .command(removeCommand)
  .command(quotesCommand)
  .command(quotesAuthorCommand)
  .command(randomQuoteCommand)
  .command(externalQuoteCommand)
  .command(quotesGenreCommand)
  .demandCommand(1, "You need at least one command before moving on")
  .help().argv;
