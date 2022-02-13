require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const PORT = process.env.PORT
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileUpload({}))
app.use('/api', router)

// Error processing
app.use(errorHandler)


const start = async () =>
{
    try
    {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()