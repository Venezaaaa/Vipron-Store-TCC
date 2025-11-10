// --- Função: adicionar produto ao carrinho ---
function adicionarCarrinho(nome, preco, imagem) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const index = carrinho.findIndex(item => item.nome === nome);

  if (index > -1) {
    carrinho[index].quantidade += 1;
  } else {
    carrinho.push({ nome, preco, imagem, quantidade: 1 });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarBadgeCarrinho();
  mostrarToast(`${nome} adicionado ao carrinho!`);
}

// --- Renderiza os itens do carrinho ---
function renderCarrinho() {
  const carrinhoDiv = document.getElementById("carrinho");
  const totalEl = document.getElementById("total");
  if (!carrinhoDiv || !totalEl) return;

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinhoDiv.innerHTML = "";

  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco * item.quantidade;

    const linhaItem = document.createElement("div");
    linhaItem.classList.add("linha-item");

    linhaItem.innerHTML = `
      <div class="coluna-item">
        <img src="${item.imagem}" alt="${item.nome}" class="imagem-carrinho">
        <span>${item.nome}</span>
      </div>
      <div class="coluna-preco">
        <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
        <div class="botoes-quantidade">
          <button onclick="alterarQuantidade(${index}, -1)">-</button>
          <span class="quantidade">${item.quantidade}</span>
          <button onclick="alterarQuantidade(${index}, 1)">+</button>
          <button onclick="removerItem(${index})">x</button>
        </div>
      </div>
    `;

    carrinhoDiv.appendChild(linhaItem);
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// --- Alterar quantidade de um item ---
function alterarQuantidade(index, delta) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const item = carrinho[index];

  if (!item) return;

  if (delta === -1 && item.quantidade === 1) {
    if (confirm(`Deseja remover ${item.nome} do carrinho?`)) {
      carrinho.splice(index, 1);
    }
  } else {
    item.quantidade += delta;
    if (item.quantidade < 1) item.quantidade = 1;
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderCarrinho();
  atualizarBadgeCarrinho();
}

// --- Remove um item ---
function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderCarrinho();
  atualizarBadgeCarrinho();
}

// --- Limpa o carrinho ---
function limparCarrinho() {
  localStorage.removeItem("carrinho");
  renderCarrinho();
  atualizarBadgeCarrinho();
}

// --- Atualiza o carrinho manualmente ---
function atualizarCarrinho() {
  renderCarrinho();
  atualizarBadgeCarrinho();
}

// --- CEP auto-preenchimento ---
document.getElementById('cep')?.addEventListener('blur', function () {
  let cep = this.value.replace(/\D/g, '');
  if (cep.length !== 8) {
    alert('CEP inválido.');
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {
      if (data.erro) {
        alert('CEP não encontrado.');
        return;
      }
      document.getElementById('endereco').value = data.logradouro;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('cidade').value = data.localidade;
      document.getElementById('estado').value = data.uf;
    })
    .catch(error => {
      console.error('Erro ao buscar o CEP:', error);
      alert('Erro ao buscar o CEP.');
    });
});

// --- Atualiza o badge (contador do carrinho) ---
function atualizarBadgeCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
  const badge = document.querySelector('.cart-badge');

  if (badge) {
    badge.textContent = totalItens;
    badge.style.display = totalItens > 0 ? 'inline-block' : 'none';
  }
}

// --- Mostra a notificação (toast) ---
function mostrarToast(mensagem) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = mensagem;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// --- Quando a página carrega ---
window.onload = function () {
  renderCarrinho();
  atualizarBadgeCarrinho();

  const btnLimpar = document.getElementById("limpar-carrinho");
  const btnAtualizar = document.getElementById("atualizar-carrinho");

  if (btnLimpar) btnLimpar.addEventListener("click", limparCarrinho);
  if (btnAtualizar) btnAtualizar.addEventListener("click", atualizarCarrinho);
};

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
},4000 )

function nextImage() {
    count++;
    if (count>4){
        count = 1;
    }

    document.getElementById("radio"+ count).checked = true;
}
// Função para adicionar produto ao carrinho
function addToCart(product, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.product === product);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ product, price: parseFloat(price), image, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showToast(`${product} adicionado ao carrinho!`);
}

// Função para atualizar o badge do carrinho
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.querySelector('.cart-badge');

    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// Função para mostrar toast de notificação
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Inicializar badge do carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', updateCartBadge);

// Adicionar event listeners aos botões de adicionar ao carrinho
document.querySelectorAll('.carrinho-btn').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        const image = button.closest('.produto').querySelector('img').src;
        addToCart(product, price, image);
    });
});