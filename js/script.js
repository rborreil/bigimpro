document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const sidebar = document.querySelector(".sidebar");
    const hasSubmenu = document.querySelectorAll(".has-submenu");

    // Toggle Menu
    burgerMenu.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        burgerMenu.textContent = sidebar.classList.contains("open") ? "×" : "☰";
    });

    // Fermer le menu si on clique ailleurs
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !burgerMenu.contains(event.target)) {
            sidebar.classList.remove("open");
            burgerMenu.textContent = "☰";
        }
    });

    // Gestion des sous-menus
    hasSubmenu.forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            item.querySelector(".submenu").classList.toggle("open");
        });
    });

    // Carousel
    let index = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    function showSlide(n) {
        index = (n + totalItems) % totalItems;
        document.querySelector(".carousel").style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector(".carousel-btn.prev").addEventListener("click", () => showSlide(index - 1));
    document.querySelector(".carousel-btn.next").addEventListener("click", () => showSlide(index + 1));
});