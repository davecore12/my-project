// Client-side search and filtering for events page
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('event-search');
  if (!searchInput) return;

  const eventCards = document.querySelectorAll('.event-searchable');

  searchInput.addEventListener('input', function (e) {
    const term = e.target.value.toLowerCase().trim();

    eventCards.forEach(function (card) {
      const text = card.textContent.toLowerCase();
      if (text.includes(term)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
