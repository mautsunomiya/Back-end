const fs = require("fs");
let salvar = process.argv[2];
let nome = process.argv[3];
let email = process.argv[4];
let cadastro = JSON.parse


fs.appendFile("cadastros.json");

if(process.argv[2] == "salvar"){
    fs.appendFile("cadastros.json", cadastro, erro => {
        if(erro){
            console.log("Erro ao cadastrar usuário. O erro foi:");
            console.log(erro);
        }
        else{
            console.log("Cadastro salvo com sucesso");

        
        }
    });
}
//console.log("Função de excrita executada");