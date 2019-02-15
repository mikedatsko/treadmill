const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT || 80);

app.use('/js', express.static('build/js'));
app.use('/media', express.static('build/media'));
app.use('/build', express.static('build'));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
