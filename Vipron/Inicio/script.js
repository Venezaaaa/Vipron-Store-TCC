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
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        const image = button.closest('.produto').querySelector('img').src;
        addToCart(product, price, image);
    });
});





