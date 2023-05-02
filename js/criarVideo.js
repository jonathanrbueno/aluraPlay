import { conectaApi } from "./conectaAPI.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); 
    //MF= pega o menor nº dentro do () dele,  MR = n° aleatoria, *10= x10 pra tornar em numero inteiro, toString= tranforma em uma string.

    try{
   await conectaApi.criaVideo(titulo, descricao, url, imagem);

   window.location.href = "../pages/envio-concluido.html";
} catch (e) {
    alert(e);
}
}
formulario.addEventListener("submit", evento => criarVideo(evento))
