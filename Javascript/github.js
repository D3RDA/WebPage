// A GitHub felhasználóneved
const username = "D3RDA";
let repositories = [];
let currentSort = { property: "name", order: "asc", text: "Név szerint A-Z" };

// Lekérjük a repository-k listáját a GitHub API-ból
fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        repositories = repos;
        sortRepos(currentSort.property, currentSort.order, currentSort.text); // Alapértelmezett rendezés
    })
    .catch(error => console.error("Hiba történt a repository-k lekérésekor:", error));

function displayRepos(repos) {
    const repoContainer = document.getElementById("repo-container");
    repoContainer.innerHTML = ""; // Kiürítjük a listát

    repos.forEach(repo => {
        const repoCard = document.createElement("div");
        repoCard.classList.add("col-md-4", "mb-4");

        repoCard.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description || "Nincs leírás."}</p>
                            <p class="repo-created">Létrehozva: ${new Date(repo.created_at).toLocaleDateString()}</p>
                            <p class="repo-updated">Utolsó módosítás: ${new Date(repo.pushed_at).toLocaleDateString()}</p>
                            <a href="${repo.html_url}" class="btn btn-primary" target="_blank">Megtekintés</a>
                        </div>
                    </div>
                `;

        repoContainer.appendChild(repoCard);
    });
}

// Rendezési függvény
function sortRepos(property, order, text) {
    currentSort = { property, order, text };
    document.getElementById("selectedSort").innerText = text; // Frissítjük a dropdown gomb szövegét

    const sortedRepos = repositories.sort((a, b) => {
        let valueA = a[property];
        let valueB = b[property];

        // Ha dátumot rendezünk, akkor a megfelelő időbélyeggel hasonlítjuk össze
        if (property === "created") {
            // Létrehozás dátuma szerinti rendezés
            valueA = new Date(a.created_at).getTime();
            valueB = new Date(b.created_at).getTime();
        } else if (property === "updated") {
            // Utolsó módosítás dátuma szerinti rendezés
            valueA = new Date(a.pushed_at).getTime();
            valueB = new Date(b.pushed_at).getTime();
        } else {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
        }

        return order === "asc" ? (valueA > valueB ? 1 : -1) : (valueA < valueB ? 1 : -1);
    });

    displayRepos(sortedRepos);
}
