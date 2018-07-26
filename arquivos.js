const fs = require("fs");

console.log("FS importado com sucesso.");

fs.readFile("texto.txt");

function callbackLeitura(erro, sucesso){
    if(erro){
        console.log("ocorreu um erro");
        console.log(erro);
    }
    else {
        console.log(sucesso.toString());
        console.log("o texto está na tela");
    }
}

fs.readFile("texto.txt", callbackLeitura);

console.log("função de leitura executada com sucesso");

// 

let paraEscrever = process.argv[2];

fs.writeFile("escrever.txt", paraEscrever, erro => {
    if(erro){
        console.log("Erro ao escrever o arquivo. O erro foi:");
        console.log(erro);
    }
    else{
        console.log("Arquivo escrito com sucesso");
    }
});

console.log("Função de excrita executada");

// Igual 

/* let paraEscrever = process.argv[2];

fs.writeFile("escrever.txt")

function callbackEscrita (erro, sucesso){
    if(erro){
        console.log("Erro ao escrever o arquivo. O erro foi:");
        console.log(erro)
    }
    else{
        console.log("Arquivo escrito com sucesso")
    }
}

fs.writeFile("paraEscrever.txt", callbackEscrita);*/