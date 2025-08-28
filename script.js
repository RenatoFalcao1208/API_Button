//Criação JSON

let json1 = `{
    "id": 1,
    "nome": "Talissa",
    "sobrenome": "Nagata",
    "cidade": "São Paulo",
    "pais": "Brasil",
    "imagem": "<img src='img/talissa perfil.jpg' width='200px'>",
    "link": "https://www.instagram.com/talissa_nagata/",
    "id2": 2,
    "nome2": "Malu",
    "sobrenome2": "Amorim",
    "cidade2": "São Paulo",
    "pais2": "Brasil",
    "imagem2": "<img src='img/Malu perfil.jpg' width='200px'>",
    "link2": "https://www.instagram.com/maluulopesss/",
    "id3": 3,
    "nome3": "Renato",
    "sobrenome3": "Falcão",
    "cidade3": "São Paulo",
    "pais3": "Brasil",
    "imagem3": "<img src='img/renato perfil.jpg' width='200px'>",
    "link3": "https://www.instagram.com/refalcao__/",
    "id4": 4,
    "nome4": "Lucas",
    "sobrenome4": "Santos",
    "cidade4": "São Paulo",
    "pais4": "Brasil",
    "imagem4": "<img src='img/Lucas Santos.jpg' width='200px'>",
    "link4": "https://www.instagram.com/wholuxz/",
    "id5": 5,
    "nome5": "Pedro",
    "sobrenome5": "Bispo",
    "cidade5": "São Paulo",
    "pais5": "Brasil",
    "imagem5": "<img src='img/Pedro Bispo.jpg' width='200px'>",
    "link5": "https://www.instagram.com/pedroob_7/",
    "id6": 6,
    "nome6": "Samuel",
    "sobrenome6": "Tamawoki",
    "cidade6": "São Paulo",
    "pais6": "Brasil",
    "imagem6": "<img src='img/Smuel Tamawoki.jpg' width='200px'>",
    "link6": "https://www.instagram.com/samu_henry_/"
}`;

//Converter o texto para STRING para JSON

let dados1 = JSON.parse(json1);

//Criar variável para o link
var link1 = `<a href="${dados1.link}">Visite o Perfil!</a>`;
var link2 = `<a href="${dados1.link2}">Visite o Perfil!!</a>`;
var link3 = `<a href="${dados1.link3}">Visite o Perfil!!!</a>`;
var link4 = `<a href="${dados1.link4}">Visite o Perfil!!!!</a>`;
var link5 = `<a href="${dados1.link5}">Visite o Perfil!!!!!</a>`;
var link6 = `<a href="${dados1.link6}">Visite o Perfil!!!!!!</a>`;
//FRONT-END

function aperta1(){

    document.getElementById('nome').innerHTML = dados1.nome;
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome;
    document.getElementById('cidade').innerHTML = dados1.cidade;
    document.getElementById('pais').innerHTML = dados1.pais;
    document.getElementById('imagem').innerHTML = dados1.imagem;
    document.getElementById('link').innerHTML = link1;

}

function aperta2(){

    document.getElementById('nome').innerHTML = dados1.nome2;
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome2;
    document.getElementById('cidade').innerHTML = dados1.cidade2;
    document.getElementById('pais').innerHTML = dados1.pais2;
    document.getElementById('imagem').innerHTML = dados1.imagem2;
    document.getElementById('link').innerHTML = link2;

}

function aperta3(){

    document.getElementById('nome').innerHTML = dados1.nome3;
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome3;
    document.getElementById('cidade').innerHTML = dados1.cidade3;
    document.getElementById('pais').innerHTML = dados1.pais3;
    document.getElementById('imagem').innerHTML = dados1.imagem3;
    document.getElementById('link').innerHTML = link3;

}

function aperta4(){

    document.getElementById('nome').innerHTML = dados1.nome4;
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome4;
    document.getElementById('cidade').innerHTML = dados1.cidade4;
    document.getElementById('pais').innerHTML = dados1.pais4;
    document.getElementById('imagem').innerHTML = dados1.imagem4;
    document.getElementById('link').innerHTML = link4;

}

function aperta5(){

    document.getElementById('nome').innerHTML = dados1.nome5;
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome5;
    document.getElementById('cidade').innerHTML = dados1.cidade5;
    document.getElementById('pais').innerHTML = dados1.pais5;
    document.getElementById('imagem').innerHTML = dados1.imagem5;
    document.getElementById('link').innerHTML = link5;

}

function aperta6(){

    document.getElementById('nome').innerHTML = dados1.nome6;
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome6;
    document.getElementById('cidade').innerHTML = dados1.cidade6;
    document.getElementById('pais').innerHTML = dados1.pais6;
    document.getElementById('imagem').innerHTML = dados1.imagem6;
    document.getElementById('link').innerHTML = link6;

}

console.log(dados1)