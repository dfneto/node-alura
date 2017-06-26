/**
 * Created by david.neto on 26/06/2017.
 */

var http = require('http'); //require serve para importar algo

var server = http.createServer(function (req, res) {
    res.end("<html><body>Listando os produtos</body></html>")
});

server.listen(3000);

console.log("servidor rodando");
