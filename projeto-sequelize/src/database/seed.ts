import { Appointments, Clients } from './models'

async function generate() {
  // APPOINTMENTS
  await Appointments.create({
    nome: 'Mateus',
    endereco: 'Teste5',
    bairro: 'Teste5',
    cep: 'Teste5',
    cidade: 'Teste5',
    estado: 'Teste5',
    observacao: 'Teste5',
  })

  // CLIENTS
  await Clients.create({
    nome: 'Mateus',
    endereco: 'Rua Teste1',
    bairro: 'Bairro Teste1',
    cep: '08151021',
    telefone: 1125635596,
    celular: 11945464477,
  })

  await Clients.create({
    nome: 'Gabriel',
    endereco: 'Rua Teste2',
    bairro: 'Bairro Teste2',
    cep: '08151002',
    telefone: 1125635501,
    celular: 11945464402,
  })

  await Clients.create({
    nome: 'João',
    endereco: 'Rua Teste3',
    bairro: 'Bairro Teste3',
    cep: '08150321',
    telefone: 1125635506,
    celular: 11945464065,
  })

  console.log('All records created successfully!')
}
generate()
