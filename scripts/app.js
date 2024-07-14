const $ = document;
const darkModeChange = $.querySelector(".darkMode__handler");
const darkModeCircle=$.querySelector('.darkMode__handler-circle')

let dark = false;
darkModeChange.addEventListener("click", (event) => {
    if (!dark) {
        document.documentElement.setAttribute("data-theme", "dark");
        darkModeCircle.style.cssText='left:auto;right:2px'
    } else {
        document.documentElement.removeAttribute("data-theme");
        darkModeCircle.style.cssText='left:2px;right:'
    }
    dark = !dark;
});
