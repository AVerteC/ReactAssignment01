import express from 'express'

const app = express()
app.use(express.static('public'))

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/', (request, response) => {
    response.sendFile('/public/index.html', { root: __dirname })
})

const PORT = process.env.port || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))