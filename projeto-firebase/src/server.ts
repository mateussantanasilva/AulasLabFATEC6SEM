import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import { router } from './routes'

const app = express()

app.engine('handlebars', engine({
  helpers: {
    eq: function (v1: any, v2: any) {
      return v1 === v2
    }
  }
}))
app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(3333, () => console.log('🚀 HTTP server running on port 3333'))
