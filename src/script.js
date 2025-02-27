async function fetchDog() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        updateImage(data.message, "Here's a cute dog! 🐶");
    } catch {
        showError();
    }
}

async function fetchCat() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        updateImage(data[0].url, "Here's a cute cat! 🐱");
    } catch {
        showError();
    }
}

async function fetchQuote() {
    try {
        const response = await fetch('https://inspirobot.me/api?generate=true');
        const imageUrl = await response.text();
        updateImage(imageUrl, "Here's an inspiring quote! 💬");
    } catch {
        showError();
    }
}

function updateImage(src, text) {
    document.querySelector('.quote').textContent = text;
    document.querySelector('.author').textContent = "";
    const img = document.querySelector('.pet-image');
    img.src = src;
    img.style.display = "block";
}

function showError() {
    document.querySelector('.quote').textContent = "Failed to fetch. Try again.";
    document.querySelector('.author').textContent = "";
    document.querySelector('.pet-image').style.display = "none";
}