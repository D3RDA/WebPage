<!DOCTYPE html>
<html lang="hu">
<head>
    <link rel="icon" type="image/x-icon" href="../img/favicon.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <!-- Bootstrap JS (a funkciókhoz) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Egyedi stílusok -->
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <!-- Külső JavaScript fájl betöltése -->
    <script src="../js/szoveg.js"></script> <!-- mozgó szöveg-->
    <script src="../js/github.js"></script> <!-- repo megjelenítés -->
    <script src="../js/projects.js"></script> <!-- repo megjelenítés -->
    <!-- Oldal leírás -->
    <meta name="description" content="Személyes portfolióm">
    <meta name="keywords" content="portfólió, IT, diák, programozás, projektek, tanulmányok, webfejlesztés, programozás, számítógép, hálózat, fejlesztés">
    <meta name="author" content="Lakatos Leonardo">
    <!-- Cache Busting -->
    <script src="../js/cachebuster.js" defer></script>
    <!-- Oldal címe -->
    <title>Leoserver | Projektek</title>
</head>

<body>

<!-- Bootstrap Navigációs sáv -->
<nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container">
        <a class="navbar-brand" href="../">
            <i class="bi bi-house-fill"></i> LeoServer | IT Student</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/pages/studies">
                        <i class="bi bi-mortarboard-fill"></i> Tanulmányok
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/pages/projects">
                        <i class="bi bi-lightbulb-fill"></i> Projektek
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/leosenpaihh" target="_blank">
                        <i class="bi bi-github"></i> Github
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="mailto:lakatosleonardo1123@gmail.com">
                        <i class="bi bi-envelope-fill"></i> Elérhetőségek
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Tartalom -->
<div class="container text-center mt-5">
    <h1>GitHub Projektek</h1>

    <!-- Rendezés -->
    <div class="d-flex justify-content-center align-items-center my-3">
        <label class="fw-bold me-2 sort" style="white-space: nowrap;">Rendezés:</label>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="selectedSort">Név szerint A-Z</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="sortDropdown">
                <li><a class="dropdown-item" href="#" onclick="sortRepos('name', 'asc', 'Név szerint A-Z')">Név szerint A-Z</a></li>
                <li><a class="dropdown-item" href="#" onclick="sortRepos('name', 'desc', 'Név szerint Z-A')">Név szerint Z-A</a></li>
                <li><a class="dropdown-item" href="#" onclick="sortRepos('updated', 'asc', 'Utolsó módosítás (növekvő)')">Utolsó módosítás (növekvő)</a></li>
                <li><a class="dropdown-item" href="#" onclick="sortRepos('updated', 'desc', 'Utolsó módosítás (csökkenő)')">Utolsó módosítás (csökkenő)</a></li>
                <li><a class="dropdown-item" href="#" onclick="sortRepos('created', 'asc', 'Létrehozás dátum szerint (növekvő)')">Létrehozás dátum szerint (növekvő)</a></li>
                <li><a class="dropdown-item" href="#" onclick="sortRepos('created', 'desc', 'Létrehozás dátum szerint (csökkenő)')">Létrehozás dátum szerint (csökkenő)</a></li>
            </ul>
        </div>
    </div>


    <!-- Repository lista -->
    <div class="row" id="repo-container">
        <!-- A repository-k ide fognak megjelenni -->
    </div>

    <div class="container mt-5">
        <h1 class="text-center">Aktuális projektek</h1>
        <div id="projects-container" class="d-flex flex-wrap justify-content-center gap-3"></div>
        <br>
    </div>
</div>
</body>
</html>
