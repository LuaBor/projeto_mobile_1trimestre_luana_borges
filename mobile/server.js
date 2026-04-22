const express = require('express');
const app = express();
app.use(express.json());
const usuarios = [
    { id: 1, nome: "Paola Tamires", email: "Paola@email.com" },
    { id: 2, nome: "Caio Cesar", email: "Caio@email.com" }
];

const eventos = [
    { id: 1, usuarioid: 1, data: "17-04-2026", horario: "14:00" },
    { id: 2, usuarioid: 2, data: "22-04-2026", horario: "21:00" }
];

app.get('/eventos', (req, res) => {
    const listagem = eventos.map(evento => {
        const usuario = usuarios.find(u => u.id === evento.usuarioid);
        return {
            ...evento,
            nomeUsuario: usuario ? usuario.nome : "Não encontrado"
        };
    });
 res.json(listagem);
});
app.post('/eventos', (req, res) => {
    const novoEvento = {
        id: eventos.length + 1,
        usuarioid: req.body.usuarioid,
        data: req.body.data,
        horario: req.body.horario
    };
    eventos.push(novoEvento);
    res.status(201).json(novoEvento); 
});
app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));