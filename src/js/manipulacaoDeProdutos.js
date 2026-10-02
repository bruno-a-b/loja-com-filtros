import { catalogoProdutos } from "./catalogoProdutos.js";

const divCatalogo = document.getElementById("divCatalogo");
const barraPesquisa = document.getElementById("barraPesquisa");
const categoriaSelecao = document.getElementById("categoriaSelecao");
const minPrecoInput = document.getElementById("precoMinimo");
const maxPrecoInput = document.getElementById("precoMaximo");
const muralhaSelecao = document.getElementById("muralhaOrigem");

export function limparCatalogo() {
    if (divCatalogo === null) {
        console.error("divCatalogo não encontrado.");
        return;
    }

    divCatalogo.innerHTML = "";
}

/*Função que adiciona o card do produto à div (na real é uma section) do catálogo*/
export function adicionarProduto(produto) {
    if (divCatalogo === null) {
        console.error("divCatalogo não encontrado.");
        return;
    }

    const linkProduto = document.createElement("a");
    linkProduto.className = "linkProduto";
    linkProduto.href = "https://www.yout-ube.com/watch?v=dQw4w9WgXcQ";
    linkProduto.target = "_blank";
    linkProduto.rel = "noopener noreferrer";

    const divProduto = document.createElement("div");
    divProduto.className = "divProduto";

    const imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    const imgProduto = document.createElement("img");
    imgProduto.src = produto.imagem;
    imgProduto.alt = produto.nome;
    imgProduto.className = "imgProduto";
    imgDiv.appendChild(imgProduto);

    const pNome = document.createElement("p");
    pNome.textContent = produto.nome;
    pNome.className = "pNome";

    const pModelo = document.createElement("p");
    pModelo.className = "pModelo";
    pModelo.innerHTML = `<span style="font-weight: bold;">Modelo:</span> ${produto.modelo}`;

    const divCaracteristicas = document.createElement("div");
    divCaracteristicas.className = "divCaracteristicas";
    const pEspecificacoes = document.createElement("p");
    pEspecificacoes.className = "pEspecificacoes";
    pEspecificacoes.innerHTML = `<span style="font-weight: bold;">Especificações:</span> ${produto.especificacoes}`;
    const pCategoria = document.createElement("p");
    pCategoria.className = "pCategoria";
    pCategoria.innerHTML = `<span style="font-weight: bold;">Categoria:</span> ${produto.categoria}`;
    const pOrigem = document.createElement("p");
    pOrigem.className = "pOrigem";
    pOrigem.innerHTML = `<span style="font-weight: bold;">Origem:</span> ${produto.regiao_origem}, Muralha ${produto.muralha_origem}`;
    divCaracteristicas.append(pEspecificacoes, pCategoria, pOrigem);

    const divPreco = document.createElement("div");
    divPreco.className = "divPreco";
    const pPreco = document.createElement("p");
    pPreco.className = "pPreco";
    pPreco.textContent = `${produto.preco.toFixed(0)} Geld`;
    divPreco.appendChild(pPreco);


    /*Adiciona as partes para que o card fique completo e seja adicionado ao catálogo*/
    linkProduto.append(imgDiv, pNome, pModelo, divCaracteristicas, divPreco);
    divProduto.appendChild(linkProduto);
    divCatalogo.appendChild(divProduto);
}

/*Função que filtra todos os itens*/
export function aplicarFiltros() {
    const termoPesquisado = barraPesquisa.value.trim().toLowerCase();
    const categoria = categoriaSelecao.value.trim().toLowerCase();
    const origem = muralhaSelecao.value.trim().toLowerCase();

    let minPreco = minPrecoInput.value || 0
    if (minPreco < 0) {
        alert("O Preço Mínimo não pode ser um valor negativo!")
        minPreco = 0
        minPrecoInput.value = 0

    }

    let maxPreco = maxPrecoInput.value || Infinity

    const produtosFiltrados = catalogoProdutos.filter(produto => {
        const categoriaProduto = categoria === "todas" || produto.categoria.trim().toLowerCase() === categoria;
        const origemProduto = origem === "todas" || produto.muralha_origem.trim().toLowerCase() === origem;
        const precoProduto = produto.preco >= minPreco && produto.preco <= maxPreco;
        const texto = [
            produto.nome,
            produto.modelo,
            produto.especificacoes,
            produto.categoria,
            produto.tags_adicionais
        ].join(" ").toLowerCase();
        const pesquisaConfirmada = termoPesquisado === "" || texto.includes(termoPesquisado);

        return categoriaProduto && origemProduto && precoProduto && pesquisaConfirmada;
    });

    limparCatalogo();
    produtosFiltrados.forEach(produto => adicionarProduto(produto));
}

/*Função que limpa os filtros e depois aplica os filtros, adicionando todos os produtos de volta ao catálogo*/
export function limparProdutosFiltrados() {
    if (categoriaSelecao) categoriaSelecao.value = "Todas";
    if (muralhaSelecao) muralhaSelecao.value = "Todas";
    if (barraPesquisa) barraPesquisa.value = "";
    if (minPrecoInput) minPrecoInput.value = "";
    if (maxPrecoInput) maxPrecoInput.value = "";
    aplicarFiltros();
}