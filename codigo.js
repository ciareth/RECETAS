document.getElementById('searchInput').addEventListener('input', function () {
    let input = this.value.toLowerCase();
    let recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(function (card) {
        let title = card.querySelector('h3').textContent.toLowerCase();

        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
