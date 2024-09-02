import express from 'express'
import { create } from 'express-handlebars'
import path from 'path'
import bodyParser from 'body-parser'
import { router } from './routes'

const app = express()
const handlebars = create({ defaultLayout: 'main' })

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(3333, () => console.log('🚀 HTTP Server Running...'))
