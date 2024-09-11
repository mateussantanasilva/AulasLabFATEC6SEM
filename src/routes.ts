import { Request, Response, Router } from 'express'
import { Appointments } from './database/models'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.render('home')
})

router.get('/consultar', async (req: Request, res: Response) => {
  const appointments = await Appointments.findAll()

  console.log(appointments)

  res.render('consult', { appointments })
})

router.post('/cadastrar', async (req: Request, res: Response) => {
  await Appointments.create({
    nome: req.body.nome,
    endereco: req.body.endereco,
    bairro: req.body.bairro,
    cep: req.body.cep,
    cidade: req.body.cidade,
    estado: req.body.estado,
    observacao: req.body.observacao,
  })

  res.redirect('/')
})

router.get('/editar/:id', async (req: Request, res: Response) => {
  const appointmentById = await Appointments.findByPk(req.params.id)

  console.log(appointmentById)

  res.render('edit', { appointmentById })
})

router.post('/editar', async (req: Request, res: Response) => {
  try {
    await Appointments.update(
      {
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        observacao: req.body.observacao,
      },
      {
        where: {
          id: req.body.id,
        },
      },
    )

    return res.redirect('/consultar')
  } catch (error) {
    console.error(error)
  }
})

router.get('/excluir/:id', async (req: Request, res: Response) => {
  try {
    await Appointments.destroy({
      where: {
        id: req.params.id,
      },
    })

    return res.redirect('/consultar')
  } catch (error) {
    console.error(error)
  }
})

export { router }
