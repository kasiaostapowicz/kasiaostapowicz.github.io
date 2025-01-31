document.addEventListener("DOMContentLoaded", function() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(async function(el) {
        const file = el.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (response.ok) {
                el.innerHTML = await response.text();
            } else {
                console.error(`Błąd wczytywania pliku: ${file}`);
            }
        } catch (error) {
            console.error(`Błąd: ${error}`);
        }
    });
});

