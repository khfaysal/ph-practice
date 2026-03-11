const loading = () => {
  const productEl = document.getElementById("product");
  const quantityEl = document.getElementById("quantity");
  const product = productEl.value;
  const quantity = parseInt(quantityEl.value);

  display(product, quantity);
  productEl.value = "";
  quantityEl.value = "";

  addToLocalSotrage(product, quantity);
};

const display = (product, quantity) => {
  const ul = document.getElementById("mainUl");
  const li = document.createElement("li");
  li.innerHTML = `${quantity} ${product} are taken`;
  ul.appendChild(li);
};

const addToLocalSotrage = (product, quantity) => {
  const cart = getCart();
  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }
  console.log("cart", cart);

  const cartJSON = JSON.stringify(cart);
  //   console.log("cart", cart);
  localStorage.setItem("cart", cartJSON);
};

const getCart = () => {
  let cart = {};
  const checkCart = localStorage.getItem("cart");
  if (checkCart) {
    cart = JSON.parse(checkCart);
  }
  return cart;
};

//Display product permenently:

const displayStoredProduct = () => {
  const cart = getCart();
  for (const pro in cart) {
    const quantity = cart[pro];

    console.log(pro, quantity);
    display(pro, quantity);
  }
};

displayStoredProduct();