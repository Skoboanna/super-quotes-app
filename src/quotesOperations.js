const chalk = require("chalk");
const fs = require("fs");

function Quote(index, author, genre, quote) {
  this.index = index;
  this.author = author;
  this.genre = genre;
  this.quote = quote;
}

function processQuotesFromFile(fileName, callback, arg1, arg2) {
  let quotesFromFile;
  let quotes;

  fs.readFile(fileName, "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      quotesFromFile = JSON.parse(data);
      quotes = quotesFromFile.map(
        quote => new Quote(quote.index, quote.author, quote.genre, quote.quote)
      );
      callback(quotes, arg1, arg2);
    }
  });
}

function readAllQuotes(quotesList) {
  console.log(chalk.bgBlueBright("*** SUPER QUOTES LIST ***"));
  quotesList.forEach(quote => {
    console.log(chalk.cyan("Author: ") + quote.author);
    console.log(chalk.gray.bold.italic(quote.quote));
    console.log("*   *   *");
  });
}

function readQuotesByAuthor(quotesList, name, surname) {
  let author = "" + name + " " + surname;
  console.log(chalk.bgBlueBright("*** SUPER QUOTES LIST ***"));
  console.log("by " + author);

  let quotesByAuthor = quotesList.filter(quote => {
    return quote.author === author;
  });
  quotesByAuthor.forEach(quote => {
    //console.log(chalk.cyan("Author: ") + quote.author);
    console.log(chalk.gray.bold.italic(quote.quote));
    console.log("*   *   *");
  });
}

module.exports = {
  processQuotesFromFile: processQuotesFromFile,
  readAllQuotes: readAllQuotes,
  readQuotesByAuthor: readQuotesByAuthor
};
