
document.addEventListener("DOMContentLoaded", function () {
    fetch("/../../../Javascript/projects.json")
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById("projects-container");
            container.innerHTML = ""; // Ürítsük ki a tartalmat

            projects.forEach(project => {
                const card = document.createElement("div");
                card.className = "card custom-projects p-3";
                // card.innerHTML = `
                //     <div class="card-body text-center">
                //         <h3 class="card-title">${project.icon} ${project.name}</h3>
                //         <p class="card-text">${project.description}</p>
                //          <img class="services__card" src="${project.screenshot}" alt="Ez egy kép">
                //         <a href="${project.url}" class="button" target="_blank">Continue</a>
                //     </div>
                // `;
          card.innerHTML = `
    <div 
        class="services__card" 
        style="background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(17,17,17,0.6) 100%), url('${project.screenshot}');"
        onclick="window.open('${project.url}', '_blank')"
    >
        <h3 class="card-title">${project.icon} ${project.name}</h3>
        <div class="card-overlay">
            <a href="${project.url}" target="_blank">Continue</a>
        </div>
    </div>
    <p>Description:</p>
    <p>${project.description}</p>
`;

                container.appendChild(card);
            });
        })
    
        .catch(error => console.error("Hiba a projektek betöltése közben:", error));
});
