//Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  document.querySelector(".search-form").classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
document.querySelectorAll(".item-detail-button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#item-detail-modal").style.display = "flex";
    document.body.classList.add("no-scroll");
  });
});

document
  .querySelector(".modal .close-icon")
  .addEventListener("click", function () {
    document.querySelector("#item-detail-modal").style.display = "none";
    document.body.classList.remove("no-scroll");
  });

// Klik di luar modal untuk menutup
window.addEventListener("click", function (e) {
  const modal = document.querySelector("#item-detail-modal");
  const modalContent = document.querySelector(".modal .modal-container");

  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});
