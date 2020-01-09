const quotesHandler = require("../quotesOperations");

const removeQuoteByIdHandler = args => {
  const id = `${args.id}`;

  quotesHandler.processQuotesFromFile(
    "../src/quotes.json",
    quotesHandler.removeQuoteById,
    id
  );
};

module.exports = {
  command: "remove id <id>",
  desc: "Remove quote by given ID from the list",
  handler: removeQuoteByIdHandler
};
