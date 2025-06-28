document.addEventListener("DOMContentLoaded", function () {
    fetch("/../../../Javascript/projects.json")
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById("projects-container");
            container.innerHTML = ""; // Ürítsük ki a tartalmat

            // Közös flexbox konténer létrehozása
            const servicesContainer = document.createElement("div");
            servicesContainer.className = "services__container";

            projects.forEach(project => {
                const card = document.createElement("div");
                card.className = "services__card";
                card.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(17,17,17,0.6) 100%), url('${project.screenshot}')`;
                card.onclick = () => window.open(project.url, '_blank');

                card.innerHTML = `
                    <h3 class="card-title">${project.icon} ${project.name}</h3>
                    <div class="card-overlay">
                        <a href="${project.url}" target="_blank">Tovább</a>
                    </div>
                `;

                servicesContainer.appendChild(card);
            });

            container.appendChild(servicesContainer);
        })
        .catch(error => console.error("Hiba a projektek betöltése közben:", error));
});