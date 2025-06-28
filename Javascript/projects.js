document.addEventListener("DOMContentLoaded", function () {
    fetch("/../../../Javascript/projects.json")
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById("projects-container");
            container.innerHTML = ""; // Ürítsük ki a tartalmat

            projects.forEach(project => {
                const card = document.createElement("div");
                card.className = "card custom-projects p-3";
                card.innerHTML = `
                    <div class="card-body text-center">
                        <h3 class="card-title">${project.icon} ${project.name}</h3>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.url}" class="btn btn-primary" target="_blank">Megtekintés</a>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Hiba a projektek betöltése közben:", error));
});
