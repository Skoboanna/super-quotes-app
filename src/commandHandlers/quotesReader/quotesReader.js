const quotesHandler = require("../../quotesOperations");

const readQuotesHandler = () => {
  quotesHandler.processQuotesFromFile(
    "../src/quotes.json",
    quotesHandler.readAllQuotes
  );
};

module.exports = {
  command: "quotes",
  desc: "Prints all quotes from the list",
  handler: readQuotesHandler
};
