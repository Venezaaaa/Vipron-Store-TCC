// --- Função: adicionar produto ao carrinho ---
function adicionarCarrinho(nome, preco, imagem) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push({ nome, preco, imagem });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  // Atualiza badge e mostra notificação
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
    total += item.preco;

    const linhaItem = document.createElement("div");
    linhaItem.classList.add("linha-item");

    const colunaItem = document.createElement("div");
    colunaItem.classList.add("coluna-item");
    colunaItem.innerHTML = `
      <div class="item-conteudo">
        <img src="${item.imagem}" alt="${item.nome}" class="imagem-carrinho">
        <div class="info-produto">
          <span>${item.nome}</span>
          <div class="botoes-produto">
            <button onclick="removerItem(${index})" class="btn-carrinho-remover">Remover</button>
          </div>
        </div>
      </div>
    `;

    const colunaPreco = document.createElement("div");
    colunaPreco.classList.add("coluna-preco");
    colunaPreco.innerHTML = `<span>R$ ${item.preco.toFixed(2)}</span>`;

    linhaItem.appendChild(colunaItem);
    linhaItem.appendChild(colunaPreco);
    carrinhoDiv.appendChild(linhaItem);
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// --- Remove um item ---
function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderCarrinho();
  atualizarBadgeCarrinho();
}

// --- Compra de item ---
function comprarItem(index) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const item = carrinho[index];
  alert(`Você comprou: ${item.nome} por R$ ${item.preco.toFixed(2)}!`);
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
  const totalItens = carrinho.length; // cada item adicionado conta 1
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
