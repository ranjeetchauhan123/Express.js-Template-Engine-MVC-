// ...................................Template engine (Render ejs file)............................................

// const express = require('express')
// const app = express()
// const port = 3000

// app.set('view engine','ejs')

// app.get('/',(req,res)=>{
// res.render('home',{name: 'Ranjeet', age: 23})
// })

// app.listen(port,()=>{
//     console.log(`server is running on port ${port}`);
// })

// ---------------------------------
// < h2 > name : <%= name %></h2 >
// <h2>name : <%= age %></h2>
// ---------------------------------
// ...................................Template engine (get form data)............................................

// const express = require('express')
// const app = express()
// const port = 3000

// app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended: false}))

// app.get('/', (req, res) => {
//     res.render('form')
// })

// // get data input
// app.post('/submit', (req, res) => {
//     res.render('home',req.body)
// })

// // userlist print with check login condition if login true print data otherwise 'no such login'
// app.get('/user', (req, res) => {
//     const login = true
//     const usersList = ['Ranjeet', 'annu', 'abhay', 'sonu']
//     res.render('users',{users :usersList , login: login})
// })

// app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// })

//..................................create Dynamic Routes............................................

// const express = require('express')
// const app = express()
// const port = 4000;

// app.set('view engine','ejs')

// const userslist = ['ranjeet','annu','mohit','sonu']

// app.get('/',(req,res)=>{
//     res.render('dynamicRoute',{users: userslist})
// })

// // dynamic route
// app.get('/user/:name',(req,res)=>{
//     const username = req.params.name
//     res.send(`Profile Page of ${username}`)
// })

// app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// })

// ...................................APIs explain with Dynamic Route............................................

// const express = require('express')
// const app = express()
// const port = 4000;
// const userdetails = require('./users.json')

// app.get('/', (req, res) => {
//     res.send(userdetails)
// })

// app.get('/user/:id', (req, res) => {
//     const id = req.params.id
//     let filterdata = userdetails.filter((user) => user.id == id)
//     res.send(filterdata)
// })

// app.get('/username/:name', (req, res) => {
//     const name = req.params.name
//     let filterdata = userdetails.filter((user) =>
//         user.name.toLowerCase() == name.toLowerCase())
//     res.send(filterdata)
// })

// app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// })

// ...........................................Database Connectivity.......................................................
// const express = require('express')
// const app = express()
// const port = 3000
// const {MongoClient} = require('mongodb')

// const databaseName = "collage"
// const url = "mongodb://localhost:27017"

// const client = new MongoClient(url)

// async function dbConnection(){
//     await client.connect()
//     const db = client.db(databaseName)
//     const collection = db.collection('students')
//     console.log("mongodb connect")

//     const result = await collection.find().toArray()
//     console.log(result);    
// }
// dbConnection()

// app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// })

// .............................get Data...........................

// const express = require('express')
// const app = express()
// const port = 3000

// app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended: false}))

// app.get('/',(req,res)=>{
//     res.render('loginform')
// })

// app.post('/submit',(req,res)=>{
//     res.render('logindetails',{data :req.body})
// })

// app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// })

//...............................MVC...............................

// const express = require('express');
// const handleUsers = require('./controller/userController');
// const app = express()
// const port = 3000;

// app.set('view engine', 'ejs')

// app.get('/',handleUsers)

// app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// })

// ..................................get data from Api Data (MVC).....................................

const express = require('express');
const controller = require('./controller/apiController');
const app = express()
const port = 3000;

app.set('view engine', 'ejs')

app.get('/',controller)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})