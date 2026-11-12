// Lista de produtos da loja TRASH MERCH
const produtos = [
    {
        id: 1,
        nome: "Camisa TeamSesh",
        preco: "R$ 159,90",
        imagem: "camisa.sesh.webp"
    },
    {
        id: 2,
        nome: "Moletom Underground",
        preco: "R$ 289,90",
        imagem: "moletom.jpg"
    },
    {
        id: 3,
        nome: "Tênis Skull (Preto)", // Pode mudar para Crocs Skull se quiser
        preco: "R$ 499,00",
        imagem: "tennis-skull.webp"
    },
    {
        id: 4,
        nome: "Boné Cross Guns",
        preco: "R$ 89,90",
        imagem: "bone.webp"
    },
    {
        id: 5,
        nome: "Camiseta Trashboyz",
        preco: "R$ 119,90",
        imagem: "camisa-trashboyz.jpeg"
    }
];

// Pega a div onde os produtos vão aparecer no HTML
const containerProdutos = document.getElementById('lista-produtos');

// Função que monta os cards na tela
function renderizarProdutos() {
    containerProdutos.innerHTML = ""; // Limpa a div antes de adicionar

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card-produto');

        // Aqui ele cria o HTML de cada produto
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="preco">${produto.preco}</p>
            <button class="btn-comprar" onclick="adicionarAoCarrinho('${produto.nome}', '${produto.preco}')">ADICIONAR AO CARRINHO</button>
        `;

        containerProdutos.appendChild(card);
    });
}

// Função do botão de comprar
function adicionarAoCarrinho(nome, preco) {
    alert(`Você adicionou: ${nome} - ${preco} ao carrinho!`);
}

// Roda a função assim que a página carregar
renderizarProdutos();