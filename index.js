const http = require('http');
const Game = require('./src/Game');
let app = http.createServer();

app.listen(3000, '127.0.0.1')
const game = new Game();
game.start()
app.close()
