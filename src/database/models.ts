import { DataTypes } from 'sequelize'
import { sequelize } from './connection'

// adiciona automaticamente os campos createdAt e updatedAt nos models
export const Appointments = sequelize.define('agendamentos', {
  nome: {
    type: DataTypes.STRING,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  bairro: {
    type: DataTypes.STRING,
  },
  cep: {
    type: DataTypes.STRING,
  },
  cidade: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING,
  },
  observacao: {
    type: DataTypes.TEXT,
  },
})
Appointments.sync().then(() => console.log('Appointments synced successfully!'))

export const Clients = sequelize.define('clientes', {
  nome: {
    type: DataTypes.STRING,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  bairro: {
    type: DataTypes.STRING,
  },
  cep: {
    type: DataTypes.STRING,
  },
  telefone: {
    type: DataTypes.INTEGER,
  },
  celular: {
    type: DataTypes.INTEGER,
  },
})
Clients.sync().then(() => console.log('Clients synced successfully!'))
