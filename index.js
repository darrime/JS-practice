const title = document.querySelector("#h1");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(100, 50, 0";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);

}

init();