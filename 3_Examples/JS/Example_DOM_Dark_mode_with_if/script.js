function setActive(element) {
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Cambiar al modo claro";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Cambiar al modo oscuro";
        element.classList.add("dark-mode");
    }
}