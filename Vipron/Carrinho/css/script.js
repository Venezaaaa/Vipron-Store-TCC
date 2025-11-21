/* ============================================================
   NOTIFICAÇÃO
============================================================ */
function mostrarToast(msg) {
    const div = document.createElement("div");
    div.className = "toast";
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}

/* ============================================================
   ADICIONAR AO CARRINHO
============================================================ */
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
    animarImagemParaCarrinho(imagem, nome);
}

/* ============================================================
   RENDERIZAR CARRINHO
============================================================ */
function renderCarrinho() {
    const carrinhoDiv = document.getElementById("carrinho");
    const totalEl = document.getElementById("total");
    if (!carrinhoDiv || !totalEl) return;

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinhoDiv.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco * item.quantidade;

        carrinhoDiv.innerHTML += `
        <div class="linha-item">
            <div class="coluna-item">
                <input type="checkbox" class="produto-select" data-index="${index}">
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
        </div>
        `;
    });

    totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

/* ============================================================
   ALTERAR QUANTIDADE
============================================================ */
function alterarQuantidade(index, delta) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const item = carrinho[index];
    if (!item) return;

    if (delta === -1 && item.quantidade === 1) {
        carrinho.splice(index, 1);
    } else {
        item.quantidade += delta;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderCarrinho();
    atualizarBadgeCarrinho();
}

/* ============================================================
   REMOVER ITEM
============================================================ */
function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderCarrinho();
    atualizarBadgeCarrinho();
}

/* ============================================================
   LIMPAR CARRINHO
============================================================ */
function limparCarrinho() {
    localStorage.removeItem("carrinho");
    renderCarrinho();
    atualizarBadgeCarrinho();
}

/* ============================================================
   FINALIZAR COMPRA
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    renderCarrinho();
    atualizarBadgeCarrinho();

    const btnFinalizar = document.getElementById("btn-finalizar");

    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", () => {
            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            let selecionados = [];

            document.querySelectorAll(".produto-select").forEach(chk => {
                if (chk.checked) {
                    selecionados.push(carrinho[parseInt(chk.dataset.index)]);
                }
            });

            if (selecionados.length === 0) {
                mostrarToast("Selecione pelo menos 1 produto!");
                return;
            }

            localStorage.setItem("carrinhoSelecionado", JSON.stringify(selecionados));

            window.location.href = "../html/finalizar.html";
        });
    }

    const btnLimpar = document.getElementById("limpar-carrinho");
    if (btnLimpar) btnLimpar.addEventListener("click", limparCarrinho);
});

/* ============================================================
   ATUALIZAR BADGE DO CARRINHO
============================================================ */
function atualizarBadgeCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const badge = document.querySelector(".cart-badge");

    if (!badge) return;

    const total = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? "inline-block" : "none";
}

/* ============================================================
   ANIMAÇÃO IMAGEM VOANDO
============================================================ */
function animarImagemParaCarrinho(srcImagem, nomeProduto) {
    const iconeCarrinho = document.querySelector('.cart-icon img');
    if (!iconeCarrinho) return;

    const produtoImg = [...document.querySelectorAll('.produto img')]
        .find(img => img.alt === nomeProduto);
    if (!produtoImg) return;

    const produtoRect = produtoImg.getBoundingClientRect();
    const carrinhoRect = iconeCarrinho.getBoundingClientRect();

    const imgClone = produtoImg.cloneNode(true);
    imgClone.classList.add('img-voando');
    document.body.appendChild(imgClone);

    imgClone.style.left = `${produtoRect.left}px`;
    imgClone.style.top = `${produtoRect.top}px`;
    imgClone.style.width = `${produtoRect.width}px`;
    imgClone.style.height = `${produtoRect.height}px`;

    getComputedStyle(imgClone).transform;

    imgClone.style.transform = `
        translate(${carrinhoRect.left - produtoRect.left}px,
                  ${carrinhoRect.top - produtoRect.top - 50}px)
        scale(0.1)
    `;
    imgClone.style.opacity = "0.3";

    setTimeout(() => {
        imgClone.remove();
        iconeCarrinho.classList.add("balancar");
        setTimeout(() => iconeCarrinho.classList.remove("balancar"), 600);
    }, 600);
}
/* ============================================================
   CARROSSEL AUTOMÁTICO
============================================================ */

let count = 1;

// Marca o primeiro radio assim que carregar
document.addEventListener("DOMContentLoaded", () => {
    const firstRadio = document.getElementById("radio1");
    if (firstRadio) firstRadio.checked = true;
});

// Muda a imagem a cada 4 segundos
setInterval(() => {
    nextImage();
}, 4000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    let radio = document.getElementById("radio" + count);
    if (radio) radio.checked = true;
}
