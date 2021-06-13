# -*- coding: utf-8 -*-
"""
Created on Tue Jun  4 22:02:57 2019

@author: SAJGO
"""
import sqlite3
if __name__ == "__main__":
    conn = sqlite3.connect('sqllite.db')
    print("Otwarto baze danych")
    conn.execute('CREATE TABLE pracownicy (imienazwisko TEXT, nrpracownika TEXT, adres TEXT)')
    print("Utworzono tabele")
    conn.close()
    print("Zamknięto baze danych")
    conn = sqlite3.connect('sqllite.db')
    print("Otwarto baze danych")
    cur = conn.cursor()
    cur.execute("INSERT INTO pracownicy (imienazwisko, nrpracownika, adres) VALUES (?,?,?)",
                ('Gracjan Zarzycki', '1', 'Elblag'))
    cur.execute("INSERT INTO pracownicy (imienazwisko, nrpracownika, adres) VALUES (?,?,?)",
                ('Nikola Alabama', '2', 'Wrocław'))
    conn.commit()
    cur.execute('SELECT * FROM pracownicy')
    print(cur.fetchall())
    conn.close()
    print("Zamknięto baze danych")