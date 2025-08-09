let livros = []
const endpointDaAPI= 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBucarLivrosDaAPI ()
const elementoParaInserirLivros = document.getElementById('livros');

asysnc function getBucarLivrosDaAPI() {
    const res = await fetch (endpointDaAPI)
    livros = await res.json()
    console.log(livros)
    exibirLivrosNaTela(livros)
}

    function exibirLivrosNaTela(exibirLivrosNaTela){
exibirLivrosNaTela.forEach(livros => {
        elementoParaInserirLivros.innerHTML += `
            <div class="livro"> 
      <img class="livro__imagens" src="imagens/Cangaceiro-Javascript.png" alt="Capa do livro Cangaceiro JavaScript" />
      <h2 class="livro__titulo">
        Cangaceiro JavaScript:
        Uma aventura no sertão da programação
      </h2>
      <p class="livro__descricao">Flávio Almeida</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens indisponivel" src="imagens/O-Retorno-do-cangaceiro-JavaScript.png"
        alt="Capa do livro O Retorno do Cangaceiro JavaScript+" />
      <h2 class="livro__titulo">
        Cangaceiro JavaScript +:
        O Retorno do cangaceiro JavaScript
      </h2>
      <p class="livro__descricao">Flávio Almeida</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/O-Retorno-do-cangaceiro-JavaScript2.png"
        alt="Capa do livro o Retorno do Cangaceiro JavaScript: De padrões a uma abordagem funcional" />
      <h2 class="livro__titulo">
        O Retorno do cangaceiro JavaScript:
        De padrões a uma abordagem funcional
      </h2>
      <p class="livro__descricao">Flávio Almeida</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Front-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens indisponivel" src="imagens/Acessibilidade-na-Web.png"
        alt="Capa do livro Acessibilidade na Web" />
      <h2 class="livro__titulo">
        Acessibilidade na Web:
        Boas práticas para construir sites e aplicações acessíveis
      </h2>
      <p class="livro__descricao">Renaldo Ferraz</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/A-Web-Mobile.png"
        alt="Capa do livro A Web Mobile: Design Responsivo e além para Web adaptada ao mundo mobile" />
      <h2 class="livro__titulo">
        A Web Mobile: Design Responsivo e além para Web adaptada ao mundo mobile
      </h2>
      <p class="livro__descricao">Sérgio Lopes</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/Coletânea-Front-end.png" alt="Capa do livro Coletânea Front-end: 
          Uma antologia da comunidade front-end brasileira" />
      <h2 class="livro__titulo">
        Coletânea Front-end:
        Uma antologia da comunidade front-end brasileira
      </h2>
      <p class="livro__descricao">Múltiplos autores</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/Guia-front-end.png" alt="Capa do livro Guia Front-End: 
        O caminho das pedras para ser um dev Front-End" />
      <h2 class="livro__titulo">
        Guia Front-End:
        O caminho das pedras para ser um dev Front-End
      </h2>
      <p class="livro__descricao">Diego Eis</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/HTML-e-CSS3.png"
        alt="Capa do livro HTML5 e CSS3: Domine a web do futuro" />
      <h2 class="livro__titulo">
        HTML5 e CSS3: Domine a web do futuro
      </h2>
      <p class="livro__descricao">Lucas Mazza</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/Bootstrap4.png" alt="Capa do livro Bootstrap 4
          Conheça a biblioteca front-end mais utilizada no mundo" />
      <h2 class="livro__titulo">
        Bootstrap 4
        Conheça a biblioteca front-end mais utilizada no mundo
      </h2>
      <p class="livro__descricao">Natan Souza</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens indisponivel" src="imagens/Sass.png" alt="Capa do livro Sass
          Aprendendo pré-processadores CSS" />
      <h2 class="livro__titulo">
        Sass
        Aprendendo pré-processadores CSS
      </h2>
      <p class="livro__descricao">Natan Souza</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/Turbine-seu-CSS.png" alt="Capa do livro Turbine seu CSS
          Folhas de destilo inteligentes com Sass" />
      <h2 class="livro__titulo">
        Turbine seu CSS
        Folhas de destilo inteligentes com Sass
      </h2>
      <p class="livro__descricao">Rosicléia Frasson</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/CSS-Eficiente.png" alt="Capa do livro CSS Eficiente: 
          Técnicas e ferramentas que fazem a diferença nos seus estilos" />
      <h2 class="livro__titulo">
        CSS Eficiente: Técnicas e ferramentas que fazem a diferença nos seus estilos
      </h2>
      <p class="livro__descricao">Rosicléia Frasson</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/Angular-11-e-Firebase.png"
        alt="Capa do livro Angular 11 e Firebase: Construindo uma aplicação integrada com a plataforma Google" />
      <h2 class="livro__titulo">
        Angular 11 e Firebase: Construindo uma aplicação integrada com a plataforma Google
      </h2>
      <p class="livro__descricao">Kheronn Khennedy Machado</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/Guia-prático-de-Typescript.png" alt="Capa do livro Guia prático de TypeScript
          Melhore suas aplicações JavaScript" />
      <h2 class="livro__titulo">
        Guia prático de TypeScript
        Melhore suas aplicações JavaScript
      </h2>
      <p class="livro__descricao">Thiago da Silva Adriano</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/Front-end-com-Vue.js.png" alt="Capa do livro  Front-end com Vue.js -
          Da teoria à prática sem complicações" />
      <h2 class="livro__titulo">
        Front-end com Vue.js -
        Da teoria à prática sem complicações
      </h2>
      <p class="livro__descricao">Leonardo Vilarinho</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>

    <div class="livro">
      <img class="livro__imagens" src="imagens/Vue.js.png" alt="Capa do livro  Vue.js
          Construa aplicações incríveis" />
      <h2 class="livro__titulo">
        Vue.js
        Construa aplicações incríveis
      </h2>
      <p class="livro__descricao">Caio Incau</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
      </div>
    </div>
        `
 })
}
