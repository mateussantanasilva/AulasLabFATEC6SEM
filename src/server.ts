import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.get('/cadastro/:nome/:sobrenome/:idade', (req: Request, res: Response) => {
  console.log(req.params)

  res.sendFile(`${__dirname}/views/register.html`)
})

app.listen(3333, () => console.log('🚀 HTTP Server Running...'))
