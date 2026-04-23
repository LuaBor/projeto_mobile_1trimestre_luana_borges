const express = require('express');
const app = express();
app.use(express.json());
const usuarios = [
    { id: 1, nome: "Paola Tamires", email: "Paola@email.com" },
    { id: 2, nome: "Caio Cesar", email: "Caio@email.com" }
];

let eventos = [
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
app.put('/eventos/:id', (req, res) => {
    const { id } = req.params;
    const { usuarioid, data, horario } = req.body;

    
    const index = eventos.findIndex(e => e.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ mensagem: "Evento não encontrado" });
    }
        eventos[index] = {
        ...eventos[index],
        usuarioid: usuarioid || eventos[index].usuarioid,
        data: data || eventos[index].data,
        horario: horario || eventos[index].horario
    };
    res.json(eventos[index]);
});
app.delete('/eventos/:id', (req, res) => {
    const { id } = req.params;

    
    const existe = eventos.find(e => String(e.id) === String(id));

    if (!existe) {
        return res.status(404).json({ mensagem: "Evento não encontrado" });
    }

   
    eventos = eventos.filter(e => String(e.id) !== String(id));

    res.json({ mensagem: `Evento ${id} removido com sucesso!` });
});
app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));