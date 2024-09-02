import pandas as pd

dataFrame = pd.DataFrame(
  {
    'Nome': {
      0: 'João',
      1: 'Maria',
      2: 'José',
    },
    'Escolaridade': {
      0: 'Ensino Fundamental',
      1: 'Ensino Médio',
      2: 'Ensino Superior',
    }
  }
)

print(dataFrame)

dataFrame.to_csv('dados.csv', index=False)

print('-'*50)

# Importando csv
automoveis = pd.read_csv('marcas-carros.csv')

print(automoveis.head()) # 5 primeiras linhas
print(automoveis.info()) # 5 fornece columns, tipos, tamanho
print(automoveis.columns.tolist()) # array de colunas