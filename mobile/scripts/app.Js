const usuarios = [
{  id: 1,
   nome: "Paola Tamires",
   email: "Paola@email.com",
   senha: "100416"
},
{  id: 2,
   nome: "Caio Cesar",
   email: "Caio@email.com",
   senha: "071108"

}
];

const eventos = [
{
    id:1,
    usuarioid:1,
    data: "17-04-2026",
    horario: "14:00",
    numerodepessoas: "40"
},

{ id: 2,
usuario:2,
data: "22-04-2026",
horario: "21:00",
numerodepessoas: "20"

}
];
function listarEventosComUsuario() {
    return eventos.map(evento => {
      const usuario = usuarios.find(u => u.id === evento.usuarioId);
  
      return {
        ...evento,
        nomeUsuario: usuario ? usuario.nome : null,
        emailUsuario: usuario ? usuario.email : null
      };
    });
  }
  console.log(listarEventosComUsuario());

module.exports = { usuarios, eventos, listarEventosComUsuario };
