document.addEventListener('DOMContentLoaded', function() {
  const ottieniDatiBtn = document.getElementById('ottieniDatiBtn');

  if (ottieniDatiBtn) {
    ottieniDatiBtn.addEventListener('click', () => {
      fetch('/api/dati')
        .then(response => response.json())
        .then(data => {
          const datiContainer = document.getElementById('datiContainer');
          datiContainer.innerHTML = '';

          data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.nome; // Sostituisci con il campo corretto
            datiContainer.appendChild(listItem);
          });
        })
        .catch(error => {
          console.error(error);
        });
    });
  }
});
