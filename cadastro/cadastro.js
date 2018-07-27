const fs = require("fs");
const comando = process.argv[2];
const nome = process.argv[3];
const email = process.argv[4];
const arquivo = "cadastro.json";

let cadastros = {};

let comandos = {
    "salvar": salvar,
    "buscar": buscar,
    "buscar-todos": buscarTodos
}
fs.readFile(arquivo, (erro, dados) => {

    if(!erro){
        let dadosString = dados.toString();
        cadastros = JSON.parse(dadosString);
    }


    if(!comandos[comando]){
        console.log("Esse comando  não existe")
        return;
    }

    comandos[comando]();
});  

function salvar() {
    if(!nome || !email){
        console.log("Insira seu nome e email");
        return;
    }
    cadastros[nome] = email;

    let dados = JSON.stringify(cadastros);
        
    fs.writeFile("cadastro.json", dados, (erro) => {
        if(erro){
            console.log("Deu ruim")
        } else{
            console.log("Dados gravados")
        }
    });
}
 function buscar(){
    console.log(cadastros[nome]);
 }
function buscarTodos(){
    console.log(cadastros);
}


