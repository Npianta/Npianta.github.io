// Eseguire la richiesta al server e aggiungere i dati al DOM
fetch('https://tuo-server-api.com/dati')
  .then(response => response.json())
  .then(data => {
    const datiContainer = document.getElementById('datiContainer');
    
    // Elabora i dati e crea l'HTML dinamicamente
    const listaDati = document.createElement('ul');
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.nome; // Supponiamo che 'nome' sia un campo presente nei dati
      listaDati.appendChild(listItem);
    });
    
    // Aggiungi la lista di dati al DOM
    datiContainer.appendChild(listaDati);
  })
  .catch(error => {
    // Gestisci eventuali errori di connessione o richiesta
    console.error(error);
  });
