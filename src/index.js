// se debe tener instalado node.js en windows c://
// se debe ejecutar cada uno de los comandos lo ideal en cmd
/* creacion de archivo automatico package.json = npm init -y  === se alojara en htdocs/Proyecto3-NODEJS/package.json
   instalacion de framework express de nodejs  = npm i express morgan ejs  === sumara mas codigo en package.json
   instalacion nodemon =  npm i nodemon -D  = sumara mas codigo a package.json

   crear carpeta src y archivo index.js dentro = Proyecto3-NODEJS/src/index.js 
   dejar mensaje log dentro de index.js = console.log(''holaa prueba conexion)
   crear sript para que se actualice autamitcamente en consola:
   archivo ---package.json---
     "scripts": {
    "dev": "nodemon src/index.js" = sumar este comando eliminar el que esta por defecto
  },

  modificar en package.json
  {
                      "description": "",
                      "main": "index.js",
mensaje para agregar= "type": "module",

por ultimo ejecutar el comando en cmd
npm run dev
con esto deberia actualizar cada cambio en consola
*/

//dejar este codigo para que figure en consola
import express from 'express'
const app = express()
app.get('/', (req,res) => res.send('hola mundo'))   
app.listen(3000)
//mensaje a mostrar en pagina web
//localhost:3000
console.log('Server is Listening on port', 3000)