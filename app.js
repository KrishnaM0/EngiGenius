let readMore = document.querySelector("#blockchain");
readMore.addEventListener("click", () =>{
    window.location.href = "BlockChain.html";
});

let card_img = document.querySelector("#blockchain-img");
card_img.addEventListener("click", () =>{
    window.location.href = "BlockChain.html";
});

let economy = document.querySelector("#economy-img");
economy.addEventListener("click", () =>{
    window.location.href = "economy.html";
});

let economy_button = document.querySelector("#economy")
economy_button.addEventListener("click", () =>{
    window.location.href = "economy.html";
});

let bitcoin = document.querySelector("#bitcoin-img");
bitcoin.addEventListener("click", () =>{
    window.location.href = "bitcoin.html";
});

let bitcoin_button = document.querySelector("#bitcoin")
bitcoin_button.addEventListener("click", () =>{
    window.location.href = "bitcoin.html";
});

let inflation = document.querySelector("#inflation-img");
inflation.addEventListener("click", () =>{
    window.location.href = "inflation.html";
});

let inflation_button = document.querySelector("#inflation")
inflation_button.addEventListener("click", () =>{
    window.location.href = "inflation.html";
});

let cyber = document.querySelector("#cyber-img");
cyber.addEventListener("click", () =>{
    window.location.href = "cyber.html";
});

let cyber_button = document.querySelector("#cyber")
cyber_button.addEventListener("click", () =>{
    window.location.href = "cyber.html";
});

let gig = document.querySelector("#gig-img");
gig.addEventListener("click", () =>{
    window.location.href = "gig.html";
});

let gig_button = document.querySelector("#gig")
gig_button.addEventListener("click", () =>{
    window.location.href = "gig.html";
});

const sidebar = document.querySelector(".sidebar");
const bar = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-xmark");

bar.addEventListener("click", () => {
    sidebar.style.width = "22rem";
});

cross.addEventListener("click", () => {
    sidebar.style.width = "0rem";
});
