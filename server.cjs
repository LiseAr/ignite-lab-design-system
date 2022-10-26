// framework minimalista para nodejs

const express = require('express')
const {} = require('path')

const app = express()


app.use('/', 
  express.static(
    resolve(
      __dirname,
      './dist'
    )
  )
)



app.listen(process.env || 3000, (err) => {
  
  if (err) {return console.log(err)}
  
  console.log('Runing....')
})