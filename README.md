# super-quotes-app
Reading the quotes from json file, adding new quotes to json file

## Requirements

* chalk
`npm install chalk`
* yargs
`npm install yargs`


## Start
* From src:
`node app.js`

## Available commands

* node app.js
  * Show available commands
* node app.js __quotes__
  * Print all quotes from the list
* node app.js __author__ *name* *surname*
  * Print all quotes by provided author
* node app.js __add__ *"quote"* __author__ *name* *surname*
  * Add new quote to the list
* node app.js __remove__ __id__ *id*
  * Remove the quote from the list by given ID
