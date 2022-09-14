/* se crea dentro de src/rutes donde se creara este archivo 
ruta para pagina principal y la distintas paginas*/
//routes es para definir una porcion del codigo
import { Router } from 'express'
const router = Router()

// en cada ruta se puede declarar un objeto para que la cargue cada pagina  {title: 'pagina 1'}
router.get('/', (req, res) => res.render('index.ejs', {title: 'Pagina Principal Enrutada'}))
router.get('/about', (req, res) => res.render('about.ejs', {title: 'Pagina Acerca Enrutada'}))
router.get('/contact', (req, res) => res.render('contact.ejs', {title: 'Pagina Contacto Enrutada'}))

export default router 