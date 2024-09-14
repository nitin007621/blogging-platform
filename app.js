document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Thar", price: 29.99, image: "images/product1.jpg" },
    { id: 2, name: "bicycle", price: 39.99, image: "images/product2.jpg" },
    { id: 3, name: "Bikes", price: 19.99, image: "images/product3.jpg" },
    { id: 4, name: "Bikes", price: 49.99, image: "images/product4.jpg" },
    { id: 5, name: "Bikes", price: 49.99, image: "images/product5.jpg" },
    { id: 6, name: "Bikes", price: 49.99, image: "images/product6.jpg" },
    { id: 7, name: "shirt", price: 49.99, image: "images/product7.jpg" },
    { id: 8, name: "shirt", price: 49.99, image: "images/product8.jpg" },
    { id: 9, name: "shirt", price: 49.99, image: "images/product9.jpg" },
    { id: 10, name: "Nothing phone", price: 49.99, image: "images/product10.jpg" },
    { id: 11, name: "Iphone 13", price: 49.99, image: "images/iphone13.jpg" },
    { id: 12, name: "Iphone 15 pro max", price: 49.99, image: "images/product12.jpg" },
    { id: 13, name: "Oppo", price: 49.99, image: "images/product13.jpg" },
    { id: 14, name: "Samsung", price: 49.99, image: "images/product14.jpg" },
    { id: 15, name: "MSI Gaming Laptop", price: 49.99, image: "images/product15.jpg" },
  ];

  const cart = [];

  function loadProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = "";
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsDiv.appendChild(productDiv);
    });
  }

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      updateCartCount();
    }
  }

  function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
  }

  function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
  }

  function displayProducts(filteredProducts) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = "";
    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsDiv.appendChild(productDiv);
    });
  }

  document.getElementById('search-btn').addEventListener('click', searchProducts);

  // Initial load
  loadProducts();

  // Global functions to allow them to be called from HTML
  window.addToCart = addToCart;
  window.searchProducts = searchProducts;
});
