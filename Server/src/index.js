const http = require("http");
const characters = require("./utils/data.js");

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")) {
        const id = req.url.split("/").pop();
        const character = characters.filter(char => char.id === Number(id)).pop();
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(character));
    }
}).listen(PORT, "localhost");