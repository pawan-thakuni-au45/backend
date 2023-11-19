const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const color=require('colors')
const connectDB=require('./config/db')

//LOAD ENV VARS
dotenv.config({path:'./config/config.env'})

connectDB()

const app=express()

app.use(express.json())

//DEV LOGGING MIDDLEWEAR
if(process.env.NODE_ENV==='development'){
app.use(morgan('dev'))
}

//ROUTER FILE
const bootcamps=require('./router/bootcamps')

//MOUNT ROUTER
app.use('/api/v1/bootcamps',bootcamps)


const PORT=process.env.PORT||5000


app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV}mode on  port ${PORT}`.yellow.bold))

