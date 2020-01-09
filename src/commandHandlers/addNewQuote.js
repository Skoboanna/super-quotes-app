const quotesHandler = require("../quotesOperations");

const addTaskHandler = args => {
  const quote = `${args.quote}`;
  const name = `${args.name}`;
  const surname = `${args.surname}`;
  const author = "" + name + " " + surname;

  let newQuote = new quotesHandler.Quote(5, author, "added", quote);
  quotesHandler.processQuotesFromFile(
    "../src/quotes.json",
    quotesHandler.addNewQuote,
    newQuote
  );
};

module.exports = {
  command: "add <quote> author <name> <surname>",
  desc: "Add new quote to the list",
  handler: addTaskHandler
};
