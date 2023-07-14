# -*- coding: utf-8 -*-
"""
Created on Thu Jul 13 11:01:53 2023

@author: nicol
"""

import sqlite3

# Connessione al database SQLite locale
conn = sqlite3.connect('percorso_al_tuo_database.db')

# Esegui una query per ottenere i dati
cursor = conn.cursor()
cursor.execute("SELECT * FROM tabella")
rows = cursor.fetchall()

# Elabora i dati ottenuti e visualizzali nel tuo sito
for row in rows:
  print(row)

# Chiudi la connessione al database
cursor.close()
conn.close()