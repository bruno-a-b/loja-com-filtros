/*Código central, conectado diretamente ao index.html*/

/*Importa as funções e o array de produtos*/
import { catalogoProdutos } from "./catalogoProdutos.js";
import { aplicarFiltros, limparProdutosFiltrados } from "./manipulacaoDeProdutos.js";

/*Declaração dos elementos do HTML*/
const inputPesquisa = document.getElementById("barraPesquisa");
const categoriaSelecao = document.getElementById("categoriaSelecao");
const minPrecoInput = document.getElementById("precoMinimo");
const maxPrecoInput = document.getElementById("precoMaximo");
const muralhaOrigem = document.getElementById("muralhaOrigem");

/*Array para adicionar as categorias e muralhas*/
const categoriasAdicionadas = [];
const muralhasAdicionadas = [];

catalogoProdutos.forEach((produto) => {
    if (muralhasAdicionadas.includes((produto.muralha_origem.trim()))) {}
    else {
        muralhasAdicionadas.push(produto.muralha_origem.trim());
    }

    if (categoriasAdicionadas.includes((produto.categoria.trim()))) {}
    else {
        categoriasAdicionadas.push(produto.categoria.trim());
    }
})

muralhasAdicionadas.sort().forEach((muralha) => {
    const muralhaOpcao = document.createElement("option");
    muralhaOpcao.value = muralha;
    muralhaOpcao.textContent = muralha;
    muralhaOrigem.appendChild(muralhaOpcao);
});

categoriasAdicionadas.sort().forEach((categoria) => {
    const categoriaOpcao = document.createElement("option");
    categoriaOpcao.value = categoria;
    categoriaOpcao.textContent = categoria;
    categoriaSelecao.appendChild(categoriaOpcao);
});


/*Adiciona eventos aos elementos do HTML*/
inputPesquisa.addEventListener("input", aplicarFiltros);
categoriaSelecao.addEventListener("change", aplicarFiltros);
minPrecoInput.addEventListener("input", aplicarFiltros);
maxPrecoInput.addEventListener("input", aplicarFiltros);
muralhaOrigem.addEventListener("change", aplicarFiltros);
document.getElementById("botaoLimparFiltros").addEventListener("click", limparProdutosFiltrados);

/*Inicia o catalogo*/
aplicarFiltros();