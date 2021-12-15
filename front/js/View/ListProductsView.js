class ListProductsView {
  render(productsList) {
    for (let product of productsList) {
      document.getElementById('items').innerHTML += this.renderOneProduct(product);
    }
  }

  renderOneProduct(product) {
    return `<a href="./product.html?id=${product._id}" class="productLink">
        <article>
          <img src="${product.imageUrl}" class="productImage" alt="${product.altTxt}">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
      </a>`;
  }
}