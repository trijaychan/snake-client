const connect = require("./client.js").connect;

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Goodbye!");
    process.exit();
  }
};

console.log("Connecting...");
const client = connect();

const stdin = setupInput();
stdin.on("data", handleUserInput);