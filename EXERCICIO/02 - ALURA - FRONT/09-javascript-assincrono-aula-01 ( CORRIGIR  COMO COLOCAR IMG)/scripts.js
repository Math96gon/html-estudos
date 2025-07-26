const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload")

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})

function lerConteudoDoArquivo(arquivo) {
    return new Promise ((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name})
        }

        leitor.onerror = () => {
            rejext(`Erro na leitura do arquivo ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo)
    })
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector("container-imagem-name p");

inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if (arquivo) {
        try {
            const lerConteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = lerConteudoDoArquivo.url;
            nomeDaImagem.textContent = lerConteudoDoArquivo.nome;
        } catch (erro) {
            console.erro("Erro na leitura do arquivo")
        }
    }

})
