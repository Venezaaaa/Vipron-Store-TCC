// === Catálogo completo de produtos Vipron Store ===
const produtos = {
  // 🔹 SMARTPHONES 🔹
  "Iphone 15": {
    imagem: "../../Inicio/img/destaque/Iphone 15.png",
    preco: 5387.00,
    descricao: "O iPhone 15 traz o chip A16 Bionic, câmera de 48 MP e design refinado em alumínio. Potência e elegância no seu dia a dia."
  },
  "Motorola G24": {
    imagem: "../../Inicio/img/destaque/moto g24.png",
    preco: 699.74,
    descricao: "Smartphone com bateria de 5000 mAh, processador Octa-Core e tela de 6,6” HD+. Desempenho confiável por um ótimo preço."
  },
  "Samsung Galaxy A06": {
    imagem: "../../Inicio/img/destaque/Samsung Galaxy A06.png",
    preco: 698.99,
    descricao: "Com tela infinita de 6,5” e câmera dupla de 50 MP, o Galaxy A06 entrega beleza, desempenho e durabilidade."
  },
  "Samsung Galaxy S23": {
    imagem: "../../Inicio/img/destaque/Samsung Galaxy S23.png",
    preco: 2509.44,
    descricao: "Equipado com o Snapdragon 8 Gen 2, tela AMOLED 120Hz e câmeras profissionais. Pura potência e elegância."
  },
  "Xiaomi Poco X7 Pro": {
    imagem: "../../Inicio/img/destaque/Xiaomi Poco X7 Pro.png",
    preco: 2354.07,
    descricao: "Tela AMOLED 120Hz, chip Dimensity 8300 e câmeras de 64 MP. Um smartphone que une performance e estilo."
  },
  "Iphone 17 Pro Max": {
    imagem: "../../Inicio/img/destaque/Iphone 17 Pro Max 10.249.10",
    preco: 10254.07,
    descricao: "O iPhone 17 Pro Max traz o novo chip A19 Pro, câmeras triplo sensor e corpo em titânio. O ápice da inovação Apple."
  },

  // 🔹 NOTEBOOKS 🔹
  "MacBook Pro 14 Apple": {
    imagem: "../../Inicio/img/destaque/macbok pro 14 apple .png",
    preco: 7789.47,
    descricao: "MacBook Pro 14 com chip M3 Pro, tela Liquid Retina XDR e bateria de longa duração. Perfeito para profissionais criativos."
  },
  "MacBook Air 13 Apple": {
    imagem: "../../Inicio/img/destaque/Mackbook air apple 13.png",
    preco: 6300.00,
    descricao: "Leve, potente e silencioso. O MacBook Air 13 redefine portabilidade com chip M2 e design refinado."
  },
  "Samsung Galaxy Book4": {
    imagem: "../../Inicio/img/destaque/Notebook Samsung Galaxi Book4.png",
    preco: 3339.00,
    descricao: "Com processador Intel i5 e design ultrafino, o Galaxy Book4 oferece desempenho e integração com o ecossistema Samsung."
  },
  "Gamer Acer Nitro V": {
    imagem: "../../Inicio/img/destaque/Notebook Gamer acer nitro V.png",
    preco: 4673.00,
    descricao: "O Nitro V entrega alto desempenho com Intel i5, RTX 4050 e tela de 144Hz. Feito para gamers exigentes."
  },
  "Asus Tuf Gaming F15": {
    imagem: "../../Inicio/img/destaque/Notebook Asus tuf gaming f15.png",
    preco: 6130.03,
    descricao: "Com i7 e RTX 4060, o TUF Gaming F15 une força e durabilidade militar. Ideal para quem exige performance extrema."
  },

  // 🔹 PCS GAMERS 🔹
  "Pc Gamer AMD R7": {
    imagem: "../../Produtos/html/categorias/img categorias/Pcs Montados/Pcs Montados/Pc Gamer Completo AMD Ryzen 7-5700g, 16GB RAM, Radeon Vega 8 3.099,21.png",
    preco: 3789.47,
    descricao: "PC Gamer com Ryzen 7 5700G e 16GB RAM. Ideal para quem busca desempenho em jogos e multitarefa."
  },
  "Pc Gamer i5": {
    imagem: "../../Produtos/html/categorias/img categorias/Pcs Montados/Pcs Montados/Pc Gamer Completo RGB, Intel Core i5, 16GB RAM, SSD 490GB 1.511,99.png",
    preco: 1300.00,
    descricao: "Um PC gamer equilibrado com Intel i5, 16GB RAM e SSD 480GB. Visual RGB moderno."
  },
  "Pc Gamer i5 2": {
    imagem: "../../Produtos/html/categorias/img categorias/Pcs Montados/Pcs Montados/Pc Gamer Completo RGB, Intel Core i5, 16GBram, Placa De video GeForce 1.449,00.png",
    preco: 1899.00,
    descricao: "Intel Core i5, 16GB RAM e placa GeForce garantem ótimo desempenho em jogos competitivos."
  },
  "PC Gamer Neologic Aquarium": {
    imagem: "../../Produtos/html/categorias/img categorias/Pcs Montados/Pcs Montados/PC Gamer Neologic Aquarium, AMD Ryzen 5-5600g, 16GB RAM, Radeon Vega 7 2.599.00.png",
    preco: 2673.00,
    descricao: "Ryzen 5 5600G e 16GB RAM com gabinete Aquarium RGB. Beleza e performance em um só PC."
  },
  "Pc Gamer Skill AMD Ryzen 5-5700g": {
    imagem: "../../Produtos/html/categorias/img categorias/Pcs Montados/Pcs Montados/Pc Gamer Skill AMD Ryzen 5-5700g, 16GB RAM, Radeon Vega 7 3.646,99.png",
    preco: 3646.03,
    descricao: "PC Gamer com Ryzen 5 5700G e Vega 7. Ideal para desempenho e jogos modernos."
  },
  "Pc Gamer Skill Ryzen 5-5600GT": {
    imagem: "../../Produtos/html/categorias/img categorias/Pcs Montados/Pcs Montados/Pc Gamer Skill Ryzen 5-5600GT, 16GB RAM, Radeon vega 7 2.939,00.png",
    preco: 2789.47,
    descricao: "Com Ryzen 5 5600GT, 16GB RAM e gráficos Vega 7. Potência e fluidez em alto nível."
  },

  // 🔹 GABINETES 🔹
  "Gabinete Gamer MAG": {
    imagem: "../../Produtos/html/categorias/img categorias/Gabinetes Gamers/img Gabinetes/Gabinete Gamer MSI MAG  999.png",
    preco: 999.90,
    descricao: "Gabinete MSI MAG com vidro temperado e iluminação RGB. Ideal para setups gamers poderosos."
  },
  "Gabinete Gamer BLUE": {
    imagem: "../../Produtos/html/categorias/img categorias/Gabinetes Gamers/img Gabinetes/Gabinete Gamer neologic Aquario Multi 209,00.webp",
    preco: 209.00,
    descricao: "Gabinete compacto e elegante com LEDs azuis e estrutura ventilada."
  },
  "Gabinete Gamer RED": {
    imagem: "../../Produtos/html/categorias/img categorias/Gabinetes Gamers/img Gabinetes/Gabinete Gamer Redragon 299.png",
    preco: 299.00,
    descricao: "Design robusto, LED vermelho e vidro lateral. O estilo ideal para qualquer gamer."
  },
  "Gabinete Gamer Rise": {
    imagem: "../../Produtos/html/categorias/img categorias/Gabinetes Gamers/img Gabinetes/Gabinete Gamer Rise Mode Glass 249.png",
    preco: 249.99,
    descricao: "Gabinete Rise Mode com vidro temperado e estrutura reforçada. Beleza e desempenho térmico."
  },
  "Gabinete Gamer Wave": {
    imagem: "../../Produtos/html/categorias/img categorias/Gabinetes Gamers/img Gabinetes/Gabinete Gamer MSI MAG  999.png",
    preco: 298.40,
    descricao: "Design minimalista e espaço interno otimizado. Ideal para quem busca eficiência e estilo."
  },
  "Gabinete Gamer Rise 2": {
    imagem: "../../Produtos/html/categorias/img categorias/Gabinetes Gamers/img Gabinetes/Gabinete Rise Mode Galaxy 629.png",
    preco: 629.99,
    descricao: "Gabinete RGB premium com estrutura em aço e suporte para watercooler. Visual futurista."
  }
};

// === Exibir produto ===
const params = new URLSearchParams(window.location.search);
const nomeProduto = params.get("produto");
const produto = produtos[nomeProduto];

// === Animação de imagem voando até o carrinho ===
function animarImagemParaCarrinho(srcImagem, nomeProduto) {
  const iconeCarrinho = document.querySelector('.cart-icon img');
  const produtoImg = document.getElementById("produto-imagem");
  if (!iconeCarrinho || !produtoImg) return;

  const produtoRect = produtoImg.getBoundingClientRect();
  const carrinhoRect = iconeCarrinho.getBoundingClientRect();

  const imgClone = produtoImg.cloneNode(true);
  imgClone.classList.add('img-voando');
  document.body.appendChild(imgClone);

  imgClone.style.left = `${produtoRect.left}px`;
  imgClone.style.top = `${produtoRect.top}px`;
  imgClone.style.width = `${produtoRect.width}px`;
  imgClone.style.height = `${produtoRect.height}px`;
  imgClone.style.position = "fixed";
  imgClone.style.transition = "transform 1.5s cubic-bezier(0.25,1,0.5,1), opacity 1.5s ease";

  setTimeout(() => {
    imgClone.style.transform = `translate(${carrinhoRect.left - produtoRect.left}px, ${carrinhoRect.top - produtoRect.top}px) scale(0.1)`;
    imgClone.style.opacity = "0.3";
  }, 50);

  setTimeout(() => {
    imgClone.remove();
    iconeCarrinho.classList.add('balancar');
    setTimeout(() => iconeCarrinho.classList.remove('balancar'), 600);
  }, 1600);
}

if (produto) {
  document.getElementById("produto-nome").textContent = nomeProduto;
  document.getElementById("produto-imagem").src = produto.imagem;
  document.getElementById("produto-preco").textContent = `R$ ${produto.preco.toFixed(2)}`;
  document.getElementById("produto-descricao").textContent = produto.descricao;

  document.getElementById("btn-adicionar").addEventListener("click", () => {
    adicionarCarrinho(nomeProduto, produto.preco, produto.imagem);
    animarImagemParaCarrinho(produto.imagem, nomeProduto);
  });

  document.getElementById("btn-comprar").addEventListener("click", () => {
    adicionarCarrinho(nomeProduto, produto.preco, produto.imagem);
    window.location.href = "../../Carrinho/html/finalizar.html";
  });
} else {
  document.getElementById("produto-nome").textContent = "Produto não encontrado";
  document.getElementById("produto-descricao").textContent = "Verifique se o link está correto.";
}
