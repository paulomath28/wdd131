document.addEventListener('DOMContentLoaded', function() {
    // Obter o elemento que exibirá o ano atual
    var currentYearElement = document.getElementById('currentyear');

    // Obter o elemento que exibirá a data de última modificação
    var lastModifiedElement = document.getElementById('lastModified');

    // Obter o ano atual
    var currentYear = new Date().getFullYear();

    // Exibir o ano atual no elemento
    currentYearElement.textContent = currentYear;

    // Obter a data de última modificação do documento
    var lastModifiedDate = document.lastModified;

    // Exibir a data de última modificação no elemento
    lastModifiedElement.textContent = "Last modified: " + lastModifiedDate;
});
