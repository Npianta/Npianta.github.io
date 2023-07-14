const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Creazione dell'app Express
const app = express();
const port = 3000;

// Connessione al database SQLite
const db = new sqlite3.Database('MiEvents_TEST.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connessione al database SQLite stabilita.');
  }
});

// Endpoint API per ottenere i dati
app.get('/api/dati', (req, res) => {
  const sql = 'SELECT * FROM test'; // Sostituisci con la tua query

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Errore durante l\'esecuzione della query.' });
    } else {
      res.json(rows);
    }
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
