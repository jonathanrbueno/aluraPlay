import { conectaApi } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscarVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    //um laço de repetição, o enquanto, ele vai fazer alguma coisa enquanto a condição que colocamos for verdadeira, a condição que eu botei foi o lista.firstChild.
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if (busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe video com esse termo</h2>`
    }    
}
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))