document.addEventListener('DOMContentLoaded', function() {
    // Form Submission (only on index.html)
    const form = document.getElementById('user-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('user-name').value;
            const legend = document.getElementById('legend-name').value;
            const goal = document.getElementById('user-goal').value;

            document.getElementById('form-message').textContent = `Thank you, ${name}! Your favorite legend is ${legend}, with achievements: "${goal}".`;
            this.reset();
        });
    }

    // Search Functionality (only on index.html)
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const table = document.getElementById('players-table');

    if (searchInput && searchButton && table) {
        const rows = table.getElementsByTagName('tr');

        function filterTable() {
            const filter = searchInput.value.toLowerCase();

            for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].getElementsByTagName('td');
                const playerName = cells[0].textContent.toLowerCase();
                const careerPath = cells[1].textContent.toLowerCase();
                const nationality = cells[2].textContent.toLowerCase();

                if (playerName.includes(filter) || careerPath.includes(filter) || nationality.includes(filter)) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }

        searchButton.addEventListener('click', filterTable);

        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                filterTable();
            }
        });
    }

    // Back to Top Button (all pages)
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // High Contrast Toggle (all pages)
    const toggleContrast = document.getElementById('toggle-contrast');
    const mainStylesheet = document.getElementById('main-stylesheet');
    const highContrastStylesheet = document.getElementById('high-contrast-stylesheet');

    if (toggleContrast && mainStylesheet && highContrastStylesheet) {
        toggleContrast.addEventListener('click', function() {
            if (highContrastStylesheet.disabled) {
                highContrastStylesheet.disabled = false;
                mainStylesheet.disabled = true;
                toggleContrast.textContent = 'Normal Contrast';
            } else {
                highContrastStylesheet.disabled = true;
                mainStylesheet.disabled = false;
                toggleContrast.textContent = 'High Contrast';
            }
        });
    }
});