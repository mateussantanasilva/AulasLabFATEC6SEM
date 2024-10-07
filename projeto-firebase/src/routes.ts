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
    clientList.push({
      id: client.id,
      ...client.data(),
    })
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

router.get('/editar/:id', async (req, res) => {
  const id = req.params.id

  const client = (await db.collection('clientes').doc(id).get()).data()

  res.render('edit', { client: { id, ...client } })
})

router.post('/editar', async (req, res) => {
  const { id, nome, telefone, origem, data_contato, observacao } = req.body

  await db
    .collection('clientes')
    .doc(id)
    .update({ nome, telefone, origem, data_contato, observacao })

  res.redirect('/consulta')
})

router.get('/excluir/:id', async (req, res) => {
  const id = req.params.id

  await db.collection('clientes').doc(id).delete()

  res.redirect('/consulta')
})

export { router }
