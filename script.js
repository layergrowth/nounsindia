document.addEventListener("DOMContentLoaded", function() {
    const mainText = document.getElementById('main-text');
    typeWriter(mainText);
});

function typeWriter(element) {
    element.classList.add("typewriter");
}

document.getElementById('soonButton').addEventListener('click', function() {
    window.open("https://www.dfat.gov.au/publications/trade-and-investment/india-economic-strategy/ies/overview.html", "_blank");
});
