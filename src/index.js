import express from 'express'
const app = express()
app.get('/', (req,res) => res.send('hola mundo'))   
app.listen(3000)
console.log('Server is Listening on port', 3000)