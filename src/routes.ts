import { Request, Response, Router } from 'express'
import { Appointments } from './database/models'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.render('home')
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

router.get(
  '/cadastro/:nome/:sobrenome/:idade',
  (req: Request, res: Response) => {
    console.log(req.params)

    res.sendFile(`${__dirname}/views/index.handlebars`)
  },
)

export { router }
