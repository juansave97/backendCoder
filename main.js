const express = require('express')
const contenedor = require('./contenedor.js')
const Contenedor = new contenedor("./productos.txt")

const port1 = 8080

const app = express()

const server = app.listen(port1, () =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port} `)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/productos', async (req, res) => {
    let productos = await Contenedor.getAll()
    res.send(productos)
 })

app.get('/productoRandom', async (req, res) => {
    let productos = await Contenedor.getAll()
    let aleatorio = productos[Math.floor(Math.random() * productos.length)];
    res.send(aleatorio)
 }) 


//  let productosPrueba = [
//     {
//         title: 'celular',
//         price: 123,
//         thumbnail: 'https://m.media-amazon.com/images/I/61m1Dot5KCL._AC_SL1000_.jpg'
//     },
//     {
//         title: 'tablet',
//         price: 456,
//         thumbnail: 'https://images.samsung.com/uk/galaxy-tab-s8/feature/buy/03_color-selection/01_device-images/tab-s8-ultra/TabS8Ultra_Black_ColorSelection_720x720_img.jpg?imwidth=480'
//     },
//     {
//         title: 'computador',
//         price: 289,
//         thumbnail: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-16-5620/assets/media-gallery/gy/vostro-16-5620-nt-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4158&hei=2641&qlt=100,1&resMode=sharp2&size=4158,2641&chrss=full&imwidth=5000'
//     }

// ]

// for (let i = 0; i < productosPrueba.length; i++) {
//     console.log("producto actual", productosPrueba[i]);
//     Contenedor.save(productosPrueba[i])
// }

 