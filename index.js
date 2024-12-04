import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/conteudoHTML/index.html'));
});

app.get('/Cadastrar', function (req, res) {
    res.sendFile(__dirname + '/public/cadastro.html')
})


app.listen(6000, () => {
    console.log('Servidor rodando em http://localhost:6000')
})