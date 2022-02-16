const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Connected!");
    conn.write("Name: TJD");
    // conn.write("Move: up");
  });

  conn.on("timeout", () => {
    console.log("you ded cuz you idled.");
  });

  conn.on("close", () => {
    console.log("Goodbye!");
  });


  return conn;
};

module.exports = {
  connect
};