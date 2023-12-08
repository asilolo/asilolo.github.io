const wrapper = document.querySelector(".wrapper");

const question = document.querySelector(".question");const gif = document.querySelector(".gif");

const veryBtn = document.querySelector(".very-btn");const noBtn = document.querySelector(".maybe-btn");

veryBtn.addEventListener("click", () => {

question.innerHTML = "you are soo swweeet";
gif.src =

"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

});
maybeBtn.addEventListener("mouseover", () => {

const maybeBtnRect = maybeBtn.getBoundingClientRect();

const maxX = window.innerWidth - maybeBtnRect.width;const maxY = window.innerHeight - maybeBtnRect.height;

const randomX = Math.floor(Math.random() * maxX);

const randomY = Math.floor(Math.random() * maxY);

maybeBtn.style.left = randomX + "px";

maybeBtn.style.top = randomY + "px";

});