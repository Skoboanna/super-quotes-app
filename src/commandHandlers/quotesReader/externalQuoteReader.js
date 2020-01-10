const quotesHandler = require("../../quotesOperations");

const readRandomQuoteHandler = () => {
  quotesHandler.processQuotesFromFile(
    "../src/quotes.json",
    quotesHandler.displayAndSaveExternalQuote
  );
};

module.exports = {
  command: "generate",
  desc: "Prints random quote from the list",
  handler: readRandomQuoteHandler
};
