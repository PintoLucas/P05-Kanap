class Controller {
  async showProducts() {
    let model = new Model;
    let view = new ListProductsView;
    let productsList = await model.getProducts();
    console.log(productsList);
    view.render(productsList);
  }

  async showDetailsProduct() {
    let model = new Model;
    let view = new ProductDetailsView;
    let urlSearchParams = new URLSearchParams(window.location.search);
    let id = urlSearchParams.get("id");
    console.log(id);
    let productDetails = await model.getDetails(id);
    console.log(productDetails);
    console.log(productDetails.colors[0]);
    view.render(productDetails);
    // affichage dans la vue

    document.getElementById('addToCart').addEventListener('click', () => {
      this.addToLocalStorage(productDetails._id)
    });
  }

  addToLocalStorage(idCanape) {
    let panier = [];
    let jsonPanier = localStorage.getItem('panier');
    if (jsonPanier != null) {
      panier = JSON.parse(jsonPanier);
    }

    console.log(panier);
    let itemPanier = {};
    itemPanier.idCanape = idCanape;
    itemPanier.colorCanape = document.getElementById('colors').value;
    itemPanier.quantityCanape = document.getElementById('quantity').value;

    console.log(localStorage);
    console.log(itemPanier.idCanape);

    let idCanapeDejaExistant = false;

    for (let i = 0; i < panier.length; i++) {
      console.log(panier[i].idCanape);
      if (panier[i].idCanape == idCanape && panier[i].colorCanape == itemPanier.colorCanape) {
        idCanapeDejaExistant = true;
        panier[i].quantityCanape = parseInt(itemPanier.quantityCanape) + parseInt(panier[i].quantityCanape);
      }
    }

    if (idCanapeDejaExistant == false) {
      panier.push(itemPanier);
    }

    localStorage.setItem('panier', JSON.stringify(panier));

    /* localStorage.setItem('idCanape', JSON.stringify(idCanape));

    let colorCanape = document.getElementById('colors').value;
    localStorage.setItem('colorCanape', JSON.stringify(colorCanape));

    let quantityCanape = document.getElementById('quantity').value;
    localStorage.setItem('quantityCanape', JSON.stringify(quantityCanape)); */
  }
}