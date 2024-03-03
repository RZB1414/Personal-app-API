const express = require('express')
const rotaClient = require('./rotas/client')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/clients', rotaClient)

const port = 8000

app.listen(port, () => {
    console.log(`Executando a porta ${port}`)
})