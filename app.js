const express = require('express');
const http = require('http')
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

console.log(__dirname,'here')

app.get('/', (req, res) => {
    res.sendFile(path.join('/dist/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

app.use(cors());

app.get('*',(req,res)=>{
    res.redirect('/');
})


const server = http.createServer(app);
server.listen(port, () => console.log('server is now listening'));