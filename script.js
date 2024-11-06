document.addEventListener("DOMContentLoaded", () => {
    const randomNumberElement = document.getElementById("randomNumber");
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Change range as needed
    randomNumberElement.textContent = randomNumber;
});