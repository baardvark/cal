// Array of items to use
var items = ["T-shirt", "Necklace", "Shoes", "Backpack", "Hat", "Watch", "Purse", "Belt"];
// Empty array that will contain all cart items
var cart = [];

var cartContainer = document.getElementById("cart");
var itemButtons = document.getElementsByClassName("item-button");
var showCartButton = document.getElementById("show-cart-button");

// Adds the click event on all buttons
for(var i = 0; i < itemButtons.length; i++) {
  itemButtons[i].addEventListener("click", function () {    
    cart.push(this.parentElement.children[0].innerText);
  })
}

// Show cart button click event
showCartButton.addEventListener("click", function() {
  // This removes all items so they don't duplicate on click
  while (cartContainer.firstChild) {
    cartContainer.removeChild(cartContainer.firstChild);
  }
  // This adds all items from the cart to the DOM
  cart.forEach( function(item) {
    var para = document.createElement("p");
    var node = document.createTextNode(item);
    para.appendChild(node);
    cartContainer.appendChild(para);
  })
})
