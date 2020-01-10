const quotesHandler = require("../../quotesOperations");

const readQuoteByGenreHandler = args => {
  let genre = `${args.genre}`;
  quotesHandler.processQuotesFromFile(
    "../src/quotes.json",
    quotesHandler.readQuoteByGenre,
    genre
  );
};

module.exports = {
  command: "quote genre <genre>",
  desc: "Prints quotes of provided genre",
  handler: readQuoteByGenreHandler
};
