# -*- coding: utf-8 -*-
"""
Created on Thu Jul 13 11:12:23 2023

@author: nicol
"""

import sqlite3

# Connessione al database SQLite locale
conn = sqlite3.connect('MiEvents_TEST.db')

# Esegui una query per ottenere i dati
cursor = conn.cursor()
cursor.execute("SELECT * FROM test")
rows = cursor.fetchall()

# Elabora i dati ottenuti e visualizzali nel tuo sito
for row in rows:
  print(row)

# Chiudi la connessione al database
cursor.close()
conn.close()