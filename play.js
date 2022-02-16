// play.js

const { connect } = require("./client");
const { setupInput } = require("./input");

// connect to server
console.log("Connecting to server...");
const connection = connect();

// handle user inputs
setupInput(connection);