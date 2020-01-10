const quotesHandler = require("../quotesOperations");

const addTaskHandler = args => {
  const quote = `${args.quote}`;
  const name = `${args.name}`;
  const surname = `${args.surname}`;
  const author = "" + name + " " + surname;
  const genre = `${args.genre}`;

  let newQuote = new quotesHandler.Quote(5, author, genre, quote);
  quotesHandler.processQuotesFromFile(
    "../src/quotes.json",
    quotesHandler.addNewQuote,
    newQuote
  );
};

module.exports = {
  command: "add <quote> author <name> <surname> genre <genre>",
  desc: "Add new quote to the list",
  handler: addTaskHandler
};
