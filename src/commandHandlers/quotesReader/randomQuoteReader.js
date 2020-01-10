const quotesHandler = require("../../quotesOperations");

const readExternalQuoteHandler = () => {
  quotesHandler.processQuotesFromFile(
    "../src/quotes.json",
    quotesHandler.displayExternalQuote
  );
};

module.exports = {
  command: "random",
  desc: "Print generated quote and add it to the list",
  handler: readExternalQuoteHandler
};
