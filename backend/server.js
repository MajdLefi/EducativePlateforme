const express = require("express")
const app = express()
const authRouter = require('./routes/auth')
const bootcampRoutes = require('./routes/bootcamp')
const userRouter = require('./routes/user')

//Middleware 
app.use(express.json())

//connect DB
const connectDB = require('./config/connectDB')
connectDB()

//use the routes


app.use('/api/auth',authRouter);
app.use('/',bootcampRoutes);
app.use('/',userRouter);

const port = process.env.PORT || 2000

app.listen(port, (error) =>
    error
        ? console.log(error)
        : console.log(`The server is running on port ${port}`)
)