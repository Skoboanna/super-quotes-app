const fs = require("fs");

const addTaskHandler = args => {
  const newLine = `${args.quote}\n`;

  fs.appendFile("todo.txt", newLine, () => {
    console.log("Quote has been saved");
  });
};

module.exports = {
  command: "add <quote>",
  desc: "Add new quote to the list",
  handler: addTaskHandler
};
