const messages = [
"Aisha… are you sure? 🥺",
"Like… really really sure? 😭",
"Think again pls 👀",
"I’ll be extra nice, promise 🐱",
"Just imagine us as Valentines 💖",
"My heart is getting a little nervous…",
"Okay okay, no pressure at all 🤍",
"But just know I really like you…",
"Still a no? I respect you 🫶",
"Billu…but I’d love a yes from you ❤️🥹"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
