import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/conteudoHTML/index.html')
})

app.get('/produtos', function (req, res) {
    res.sendFile(__dirname + '/conteudoHTML/produtos.html')
})

app.get('/sobre', function (req, res) {
    res.sendFile(__dirname + '/conteudoHTML/sobre.html')    
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})