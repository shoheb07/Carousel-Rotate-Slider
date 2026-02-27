const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".card");
const total = cards.length;
const angle = 360 / total;

let currAngle = 0;

// Arrange cards in circle
cards.forEach((card, index) => {
    card.style.transform = `rotateY(${index * angle}deg) translateZ(500px)`;
});

function rotateLeft() {
    currAngle += angle;
    carousel.style.transform = `rotateY(${currAngle}deg)`;
}

function rotateRight() {
    currAngle -= angle;
    carousel.style.transform = `rotateY(${currAngle}deg)`;
}
