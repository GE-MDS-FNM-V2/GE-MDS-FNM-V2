const express = require('express');

const server = express();

server.all("*", (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


server.get('/testpoint', (req, res) => {
  res.status(200).send(
    {
      "status": "success",
      "message": "This is a test message to make sure that this works"
    }
  );
});

server.get('/dirname', (req, res) => {
  res.status(200).send(
    {
      "status": "success",
      "dir": __dirname
    }
  )
});

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = {
  server: server
};