class ProductDetailsView {
  render(productDetails) {
    console.log(productDetails);
    document.getElementById('title').innerHTML = productDetails.name;
    document.getElementById('price').innerHTML = productDetails.price;
    document.getElementById('description').innerHTML = productDetails.description;
    document.getElementById('image-item').src = productDetails.imageUrl;
    document.getElementsByClassName('productLink').href = "./product.html?id=" + productDetails._id;

    // Ajout d'options
    for (let color of productDetails.colors) {
      var opt = document.createElement("option");
      opt.value = color;
      opt.text = color;

      document.getElementById('colors').add(opt);
    }
  }
}