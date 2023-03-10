// get the data

const addElements = () => {
  const productsName = document.getElementById("product");
  const productsQuantity = document.getElementById("quantity");
  const products = productsName.value;
  const quantity = productsQuantity.value;
  createElements(products, quantity);
  saveDataLocalStorage(products, quantity);
  productsName.value = "";
  productsQuantity.value = "";
};
//create elements by Id
const createElements = (productsName, quantity) => {
  const myParent = document.getElementById("muUl");

  const li = document.createElement("li");
  li.innerHTML = `   The Name: ${productsName}  | Quantity: ${quantity}  `;
  myParent.appendChild(li);
};


//
const getStoreShopingCart = () => {
  let cart = {};
  const shopingCart = localStorage.getItem("cart");
  if (shopingCart) {
    cart = JSON.parse(shopingCart);
  }
  return cart;
};

//local storage
const saveDataLocalStorage = (product, quantity) => {
 const cart = getStoreShopingCart();
 cart[product]= quantity;
 const cartStringified = JSON.stringify(cart);
 console.log(cartStringified);
 localStorage.setItem('cart', cartStringified);

};

//display the stored data

const displayProductsFromLocal =()=>{
    const savedcarts = getStoreShopingCart();
    console.log(savedcarts);
    for(const product in savedcarts){
        const quantity = savedcarts[product]
        createElements(product,quantity)
        
    }
}

displayProductsFromLocal()
