const aside = document.querySelector("aside");
const opemaside = document.getElementById("opemaside");
const closeaside = document.getElementById("closeaside");

const toggleAside = () => {
   aside.classList.toggle("-translate-x-full");
};

opemaside.onclick = toggleAside;
closeaside.onclick = toggleAside;

////////////////////////////////////
const cartBtn = document.querySelector(".cartBtn");
const cart = document.querySelector(".cart");
const cartSection = document.querySelector(".cartSection");
const closeCart = document.querySelector(".closeCart");

const toggleCart = () => {
   cart.classList.toggle("activeCart");
   cartSection.classList.toggle("translate-x-full");
};

cartBtn.onclick = toggleCart;
closeCart.onclick = toggleCart;

////////////////////////////////////
// in decrease and increase in cart
const c_decrease = document.querySelectorAll(".c_decrease");
const c_increase = document.querySelectorAll(".c_increase");

const decrease = (e) => {
   let input = e.target.parentElement.querySelector("span");
   let number = +input.innerText;
   if (number > 1) {
      input.innerText = number - 1;
   }
};

const increase = (e) => {
   let input = e.target.parentElement.querySelector("span");
   let number = +input.innerText;
   if (number < 10) {
      input.innerText = number + 1;
   }
};

c_decrease.forEach((btn) => {
   btn.onclick = decrease;
});

c_increase.forEach((btn) => {
   btn.onclick = increase;
});
