const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT, () => console.log('listening on port ' + process.env.PORT));