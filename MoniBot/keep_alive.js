var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive | ");
  res.write("Bot is On");
  res.end();
}).listen(8080);