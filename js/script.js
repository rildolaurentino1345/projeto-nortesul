        document.getElementById('ano').textContent = new Date().getFullYear();
        const hamburguer = document.getElementById("hamburguer");
        const navList = document.getElementById("nav-list");

        hamburguer.addEventListener("click", () => {
            navList.classList.toggle("active");
        });
         navList.addEventListener("mouseleave", () => {
            navList.classList.toggle("active");
        });