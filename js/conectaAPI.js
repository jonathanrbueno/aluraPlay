async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
   
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",   //Requisições do tipo POST são usadas para enviar dados para a API. Por exemplo, 
        headers: {        //criar um novo registro de usuário com: nome, idade e endereço de e-mail.
            "content-type": "application/json"    //Diferente de requisições do tipo GET, você precisará passar 
        },                                       //um objeto das opções de configuração como um segundo argumento em requisições POST.
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    }); 
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscarVideo(termoDeBusca){
    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscarVideo,
}