const chalk = require("chalk");
const fs = require("fs");
const ax = require("axios");

function Quote(index, author, genre, quote) {
  this.index = index;
  this.author = author;
  this.genre = genre;
  this.quote = quote;
  this.setId = function(id) {
    this.index = id;
  };
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

function addNewQuote(quotes, newQuote) {
  newQuote.setId(quotes.length);
  quotes.push(newQuote);

  fs.writeFile("../src/quotes.json", JSON.stringify(quotes), "utf-8", function(
    err
  ) {
    if (err) {
      throw err;
    }
    console.log("New quote by " + newQuote.author + " added!");
  });
}

function removeQuoteById(quotes, id) {
  let filteredQuotes = quotes.filter(quote => quote.index != id);
  fs.writeFile(
    "../src/quotes.json",
    JSON.stringify(filteredQuotes),
    "utf-8",
    function(err) {
      if (err) {
        throw err;
      }
      console.log("Removed quotes with index = " + id);
    }
  );
}

function printHeader(subtitle) {
  console.log(
    "*   *   *   " +
      chalk.black.bold.bgRgb(0, 255, 255)("Super ") +
      chalk.black.bold.bgRgb(255, 0, 255)("Awesome ") +
      chalk.black.bold.bgRgb(255, 255, 0)("Quotes ") +
      "   *   *   *\n"
  );
  if (subtitle) {
    console.log("            " + subtitle + "\n");
  }
}

function printQuote(quote) {
  console.log(chalk.rgb(255, 136, 0).bold(quote.quote));
  console.log(chalk.cyan("[" + quote.index + "] Author: ") + quote.author);
  console.log(chalk.cyan("     Genre: ") + quote.genre);
  console.log("*   *   *");
}

function readAllQuotes(quotesList) {
  printHeader();
  quotesList.forEach(quote => {
    printQuote(quote);
  });
}

function printQuoteByKey(quoteList, key, value) {
  let quotesByKey = quoteList.filter(quote => {
    return quote[key] == value;
  });

  quotesByKey.forEach(quote => {
    printQuote(quote);
  });
}

function readQuotesByAuthor(quotesList, name, surname) {
  let author = "" + name + " " + surname;
  let authorSubtitle = " by " + author;
  printHeader(authorSubtitle);
  printQuoteByKey(quotesList, "author", author);
}

function readQuoteByGenre(quoteList, genre) {
  printHeader("by genre: " + genre);
  printQuoteByKey(quoteList, "genre", genre);
}

function readRandomQuote(quotesList) {
  let randomQuoteIndex = Math.floor(Math.random() * (quotesList.length - 1));
  let randomQuote = quotesList[randomQuoteIndex];
  let subtitle = "Random quote by: " + randomQuote.author;
  printHeader(subtitle);
  printQuote(randomQuote);
}

function displayAndSaveExternalQuote() {
  ax.get(
    `http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php`
  ).then(response => {
    let newQuote = new Quote(
      response.data.id,
      response.data.author,
      "randomGenre",
      response.data.quote
    );
    let subtitle = "Your generated quote";
    printHeader(subtitle);
    printQuote(newQuote);
    processQuotesFromFile("./quotes.json", addNewQuote, newQuote);
  });
}

module.exports = {
  processQuotesFromFile: processQuotesFromFile,
  readAllQuotes: readAllQuotes,
  readQuotesByAuthor: readQuotesByAuthor,
  Quote: Quote,
  addNewQuote: addNewQuote,
  removeQuoteById: removeQuoteById,
  readRandomQuote: readRandomQuote,
  readQuoteByGenre: readQuoteByGenre,
  displayAndSaveExternalQuote: displayAndSaveExternalQuote
};
