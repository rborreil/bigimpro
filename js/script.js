// NAVIGATION
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const sidebar = document.querySelector(".sidebar");
    const hasSubmenu = document.querySelectorAll(".has-submenu");


    // Ouverture / Fermeture du menu au clic sur le bouton burger
    burgerMenu.addEventListener("click", function () {
        if (sidebar.classList.contains("open")) {
            burgerMenu.innerHTML = "☰"; // Retour au burger
        } else {
            burgerMenu.innerHTML = "×";
        }

        sidebar.classList.toggle("open");
        burgerMenu.classList.toggle("open"); // Ajoute ou enlève la classe .open
    });

    // Fermer la sidebar si on clique ailleurs
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !burgerMenu.contains(event.target)) {
            sidebar.classList.remove("open");
            burgerMenu.classList.remove("open"); // Supprime la classe "open"
            burgerMenu.innerHTML = "☰"; // Remet le burger par défaut
        }
    });

    // Sous-menu déroulant avec fermeture des autres sous-menus
    hasSubmenu.forEach(element => {
        element.addEventListener("click", (e) => {
            e.stopPropagation();

            // Ferme tous les autres sous-menus
            hasSubmenu.forEach(other => {
                if (other !== element) {
                    const otherSubmenu = other.querySelector(".submenu");
                    if (otherSubmenu) {
                        otherSubmenu.style.display = "none";
                    }
                }
            });

            // Toggle le sous-menu cliqué
            const submenu = element.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            }

            // Pivote la flèche de 90° quand cliquée
            const arrow = element.querySelector(".arrow");
            arrow.style.transform = arrow.style.transform === "rotate(90deg)" ? "none" : "rotate(90deg)";
        });
    });
});



// SLOGAN
const sentences = ["« Faster, Higher, Stronger, Together » - Devise Olympique", "« L'ouverture d'esprit n'est pas une fracture du crâne » - Pierre Desproges"];
let index = 0;
const textElement = document.getElementById("changingSlogan");

function changeSlogan() {
    textElement.style.opacity = 0; // Début du fondu

    setTimeout(() => {
        index = (index + 1) % sentences.length;
        textElement.textContent = sentences[index]; // Change la phrase
        textElement.style.opacity = 1; // Réapparition en fondu
    }, 1000); // Temps du fondu avant affichage de la phrase suivante
}

setInterval(changeSlogan, 8000);



// ADDED VALUE SECTION
// CARD TEST
// Exemple d'action au clic sur une carte
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Vous avez cliqué sur une carte !');
    });
});



// TRUST
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let i = 0;

function showSlide(n) {
  i = (n + totalItems) % totalItems;
  carousel.style.transform = `translateX(-${i * 100}%)`;
}