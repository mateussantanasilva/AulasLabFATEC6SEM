import pandas as pd
import ast

# ----------------- LEITURA -----------------
filmes = pd.read_csv('atividades/tmdb_5000_credits.csv')

print(filmes.head())

print('-'*50)

# ----------------- COLUNAS TITLE E CAST -----------------

print(filmes[['title', 'cast']])

print('-'*50)

# ----------------- DESAFIO -----------------

for i in range(15):
  title = filmes['title'][i]
  cast = filmes['cast'][i]

  castArray = ast.literal_eval(cast) # converte para array

  print(title, '|', castArray[0]['name'])