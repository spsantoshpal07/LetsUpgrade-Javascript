let products = [
  
  {
    id: 1,
    name: 'Brown Brim',
    imageUrl: 'brown-brim.png',
    price: 25,
    color: 'brown',
    description: 'Good looking brown hat'
  },

  {
    id: 2,
    name: 'Blue Beanie',
    imageUrl: 'blue-beanie.png',
    price: 18,
    color: 'blue',
    description: 'Good looking blue hat'
  },

  {
    id: 3,
    name: 'Brown Cowboy',
    imageUrl: 'brown-cowboy.png',
    price: 35,
    color: 'brown',
    description: 'Good looking brown hat'
  },

  {
    id: 4,
    name: 'Grey Brim',
    imageUrl: 'grey-brim.png',
    price: 25,
    color: 'grey',
    description: 'Good looking grey hat'
  },
  {
    id: 5,
    name: 'Green Beanie',
    imageUrl: 'green-beanie.png',
    price: 18,
    color: 'green',
    description: 'Good looking green hat'
  },
  {
    id: 6,
    name: 'Palm Tree Cap',
    imageUrl: 'palm-tree-cap.png',
    price: 14,
    color: 'palm',
    description: 'Good looking palm hat'
  },
  {
    id: 7,
    name: 'Red Beanie',
    imageUrl: 'red-beanie.png',
    price: 18,
    color: 'red',
    description: 'Good looking red hat'
  },
  {
    id: 8,
    name: 'Wolf Cap',
    imageUrl: 'wolf-cap.png',
    price: 14,
    color: 'dark brown',
    description: 'Good looking brown hat'
  },
  {
    id: 9,
    name: 'Blue Snapback',
    imageUrl: 'blue-snapback.png',
    price: 16,
    color: 'blue',
    description: 'Good looking blue hat'
  },

  {
    id: 10,
    name: 'Black Jean Shearling',
    imageUrl: 'black-shearling.png',
    price: 125,
    color: 'black',
    description: 'Good looking black jacket'
  },
  {
    id: 11,
    name: 'Blue Jean Jacket',
    imageUrl: 'blue-jean-jacket.png',
    price: 90,
    color: 'blue',
    description: 'Good looking blue jacket'
  },
  {
    id: 12,
    name: 'Grey Jean Jacket',
    imageUrl: 'grey-jean-jacket.png',
    price: 90,
    color: 'grey',
    description: 'Good looking grey jacket'
  },
];

cart = JSON.parse(localStorage.getItem('cartItems'));
let count = cart.length;

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, imageUrl, color, description, price, size } = product;

    if (who == "productwrapper") {
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
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
  cart = JSON.parse(localStorage.getItem('cartItems'));
  count = cart.length;
  document.getElementsByClassName('count')[0].innerHTML = count;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  let pro = getProductByID(products, id);

  const existing = cart.find(item => item.id === pro.id)

  if(existing){
    alert('Item already added to cart');
  } else {

  cart.push(pro);
  localStorage.setItem('cartItems', JSON.stringify(cart))
  count = cart.length;
  document.getElementsByClassName('count')[0].innerHTML = count;
  }
}

const filterProduct = () => {
  const min = document.getElementById('min').value;
  const max = document.getElementById('max').value;

  let filteredProducts = [];

  if(max>0) {
    filteredProducts = products.filter(product => product.price>=min && product.price<=max);
  } else {
    filteredProducts = products.filter(product => product.price>=min);
  }
  displayProducts(filteredProducts);
}
