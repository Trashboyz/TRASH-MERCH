// Lista de produtos da loja TRASH MERCH
const produtos = [
    {
        id: 1,
        nome: "Camisa TeamSesh",
        preco: "R$ 159,90",
        imagem: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
    },
    {
        id: 2,
        nome: "Moletom Underground",
        preco: "R$ 289,90",
        imagem: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        nome: "Tênis Skull (Preto)",
        preco: "R$ 499,00",
        imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        nome: "Corrente de Prata Cross",
        preco: "R$ 199,90",
        imagem: "https://images.unsplash.com/photo-1599643477874-5222c254b079?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        nome: "Boné Cross Guns",
        preco: "R$ 89,90",
        imagem: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        nome: "Camiseta Trashboyz",
        preco: "R$ 119,90",
        imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
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
    // Aqui no futuro podemos fazer um carrinho de verdade que soma os valores
}

// Roda a função assim que a página carregar
renderizarProdutos();