let cart = JSON.parse(localStorage.getItem('cartItems'));
let count = cart.length;

function displayProducts(productsData) {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, imageUrl, color, description, price, size } = product;

      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="images/${imageUrl}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    })

    document.getElementById('cart').innerHTML = productsString;
    document.getElementsByClassName('count-item')[0].innerHTML = count;
}

displayProducts(JSON.parse(localStorage.getItem('cartItems')))

function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    count = cart.length;
    localStorage.setItem('cartItems', JSON.stringify(cart))
    document.getElementsByClassName('count-item')[0].innerHTML = count;
    displayProducts(JSON.parse(localStorage.getItem('cartItems')));
  }