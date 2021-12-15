class Model {
  getProducts() {
    return fetch("http://localhost:3000/api/products/")
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (value) {
        return value;
      })
      .catch(function (err) {
        console.log(err)
      });
  }

  getDetails(id) {
    return fetch("http://localhost:3000/api/products/" + id)
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (value) {
        return value;
      })
      .catch(function (err) {
        console.log(err)
      });
  }
}
