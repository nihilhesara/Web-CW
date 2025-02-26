// OPEN & CLOSE Basket
const basketIcon = document.querySelector("#Basket-icon");
const basket = document.querySelector(".Basket");
const closeBasketIcon = document.querySelector("#Basket-close");

basketIcon.addEventListener("click", () => {
  basket.classList.add("active");
});

closeBasketIcon.addEventListener("click", () => {
  basket.classList.remove("active");
});

// Initialize Basket items from local storage or set an empty array
let itemsInBasket = JSON.parse(localStorage.getItem("BasketItems")) || [];

// Initialize necessary functions
document.addEventListener("DOMContentLoaded", initialize);

// Initialize all functions
function initialize() {
  addEventListeners();
  renderBasketSummary();
}

// Add event listeners to necessary elements
function addEventListeners() {
  // Remove items from Basket
  document.querySelectorAll(".Basket-remove").forEach((btn) => {
    btn.addEventListener("click", handleRemoveBasketItem);
  });

  // Change item quantity
  document.querySelectorAll(".Basket-quantity").forEach((input) => {
    input.addEventListener("change", handleChangeItemQuantity);
  });

  // Add item to Basket
  document.querySelectorAll(".add-Basket").forEach((btn) => {
    btn.addEventListener("click", handleAddBasketItem);
  });

  // Buy Order
  document.querySelector(".buy-button").addEventListener("click", handleBuyOrder);

  // Clear Basket
  document.querySelector(".btn-clear-Basket").addEventListener("click", handleClearBasket);
}

// Handle adding an item to the Basket
function handleAddBasketItem() {
  const product = this.parentElement;
  const title = product.querySelector(".product-name").innerHTML;
  const price = product.querySelector(".product-price").innerHTML;
  const imgSrc = product.querySelector(".product-image").src;
  const color = product.querySelector("#colors").value;
  const quantity = 1;

  const newItemToAdd = { title, price, imgSrc, color, quantity };

  // Handle if the item already exists in the Basket
  if (itemsInBasket.some((item) => item.title === newItemToAdd.title && item.color === newItemToAdd.color)) {
    alert("This item is already in the Basket!");
    return;
  }

  itemsInBasket.push(newItemToAdd);
  localStorage.setItem("BasketItems", JSON.stringify(itemsInBasket));

  // Add product to Basket
  const newNode = document.createElement("div");
  newNode.innerHTML = createBasketBoxComponent(title, price, imgSrc, color);
  document.querySelector(".Basket-content").appendChild(newNode);

  renderBasketSummary();
}

// Handle removing an item from the Basket
function handleRemoveBasketItem() {
  this.parentElement.remove();
  itemsInBasket = itemsInBasket.filter(({ title }) => title !== this.parentElement.querySelector(".Basket-product-name").innerHTML);
  localStorage.setItem("BasketItems", JSON.stringify(itemsInBasket));
  renderBasketSummary();
}

// Handle changing item quantity
function handleChangeItemQuantity() {
  title = this.parentElement.querySelector(".Basket-product-name").innerHTML;
  // console.log(title);
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value);

  const index = itemsInBasket.findIndex(item => item.title === title);
  if (index !== -1) {
      itemsInBasket[index].quantity = this.value;
      console.log(`Quantity of ${title} updated to ${this.value}`);
  } else {
      console.log(`${title} not found in the array`);
  }
  localStorage.setItem("BasketItems", JSON.stringify(itemsInBasket));
  
  updateTotal();
}

// Handle buying an order
function handleBuyOrder() {
  if (itemsInBasket.length === 0) {
    alert("There are no items in the Basket!");
    return;
  }
  document.querySelector(".Basket-content").innerHTML = "";
  window.location.href = "checkout.html";
  renderBasketSummary();
}

// Handle clearing the Basket
function handleClearBasket() {
  const BasketContent = document.querySelector(".Basket-content");
  BasketContent.innerHTML = "";
  itemsInBasket = [];
  localStorage.removeItem("BasketItems");
  renderBasketSummary();
}

// Create HTML component for a Basket item
function createBasketBoxComponent(title, price, imgSrc, color, quantity) {
  return `
    <div class="Basket-box">
        <img src=${imgSrc} alt="" class="Basket-img">
        <div class="detail-box">
            <div class="Basket-product-name">${title}</div>
            <div class="Basket-color">Color: ${color}</div>
            <div class="Basket-price">${price}</div>
            <input type="number" value="${quantity}" class="Basket-quantity">
        </div>
        <i class='bx bxs-trash-alt Basket-remove'></i>
    </div>`;
}

// Render the Basket summary
function renderBasketSummary() {
  const BasketContent = document.querySelector(".Basket-content");
  BasketContent.innerHTML = "";

  itemsInBasket.forEach(({ title, price, imgSrc, color , quantity}) => {
    BasketContent.innerHTML += createBasketBoxComponent(title, price, imgSrc, color, quantity);
  });

  // Remove items from Basket
  document.querySelectorAll(".Basket-remove").forEach((btn) => {
    btn.addEventListener("click", handleRemoveBasketItem);
  });

  // Change item quantity
  document.querySelectorAll(".Basket-quantity").forEach((input) => {
    input.addEventListener("change", handleChangeItemQuantity);
  });

  updateTotal();
}

// Update total price of the Basket
function updateTotal() {
  let total = itemsInBasket.reduce((acc, item) => acc + parseFloat(item.price.replace("$", ""))*item.quantity, 0);
  document.querySelector(".total-price").textContent = "$" + total.toFixed(2);
}


