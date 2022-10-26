import express from 'express'
import path, { resolve } from 'path'

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

// 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
console.log(path.join(__dirname, '/dist', 'index.html'));

const app = express()

app.use('/', 
  express.static(
    resolve(
      __dirname,
      './dist'
    )
    )

)

app
  .listen(process.env.PORT || 3000, (err) => {
    if (err) { return console.log(err) }

    console.log('Runing...')
  } 
)