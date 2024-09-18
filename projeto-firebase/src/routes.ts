import { Router } from 'express'
import { db } from './database'
import { DocumentData } from 'firebase-admin/firestore'

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/consulta', async (req, res) => {
  const clients = await db.collection('clientes').get()

  const clientList: DocumentData[] = []

  clients.forEach((client) => {
    clientList.push(client.data())
  })

  res.render('list', { clientList })
})

router.post('/cadastrar', async (req, res) => {
  const { nome, telefone, origem, data_contato, observacao } = req.body

  await db
    .collection('clientes')
    .add({ nome, telefone, origem, data_contato, observacao })

  res.redirect('/')
})

export { router }
