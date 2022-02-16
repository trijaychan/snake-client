// play.js

const { connect } = require("./client");
const { setupInput } = require("./input");

// connect to server
console.log("Connecting...");
connect();

// handle user inputs
setupInput();