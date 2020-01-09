const quotesHandler = require("../../quotesOperations");
const fs = require("fs");

const readQuotesByAuthorHandler = args => {
  let name = `${args.name}`;
  let surname = `${args.surname}`;

  quotesHandler.processQuotesFromFile(
    "../src/quotes.json",
    quotesHandler.readQuotesByAuthor,
    name,
    surname
  );
};

module.exports = {
  command: "author <name> <surname>",
  desc: "Prints all quotes by provided author",
  handler: readQuotesByAuthorHandler
};
