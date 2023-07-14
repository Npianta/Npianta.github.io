# -*- coding: utf-8 -*-
"""
Created on Thu Jul 13 14:41:07 2023

@author: nicol
"""

import sqlite3

# Connessione al database
conn = sqlite3.connect('MiEvents_TEST.db')

# Creazione del cursore
cursor = conn.cursor()

# Esecuzione della query
cursor.execute("SELECT * FROM test")

# Recupero dei risultati della query
results = cursor.fetchall()

# Recupero dei nomi delle colonne
column_names = [description[0] for description in cursor.description]

# Stampa dei nomi delle colonne
for column_name in column_names:
    print(column_name)


# Stampa dei risultati
for row in results:
    print(row)

# Chiusura del cursore e della connessione al database
cursor.close()
conn.close()
