//for ADDING ITEMS

// initialize counter
let cartCount = 0;

function addToCart() {
    cartCount++; // increase count
    alert("Item added to cart successfully!\nTotal items in cart: " + cartCount);
}

//for DARK THEME

function toggleDark() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
}

//for FAVOURITES

function fav(btn) {
    if (btn.innerText === "♡") {
        btn.innerText = "❤️";
    } else {
        btn.innerText = "♡";
    }
}