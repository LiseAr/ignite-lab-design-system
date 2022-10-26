// framework minimalista para nodejs
import express from 'express'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

app.use('/', express.static(resolve(__dirname, './dist')))

app.get('posts', (req, res) => {
  res.send({
    title: 'título',
    conteudo: 'conteudo',
  })
})

app.listen(process.env || 3000, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Runing....')
})
