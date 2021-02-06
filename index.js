const title = document.querySelector("#h1");
const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    
}
        

function init() {
    title.addEventListener("click", handleClick);

}

init();