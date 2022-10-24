// DESAFIO 2



const fs = require('fs');


module.exports = class Contenedor {
    constructor (nombre) {
        this.nombre = nombre;
    }

    async save (producto) {
        let nuevoId
        let productos = new Array
                
        if (fs.existsSync(this.nombre)) {
            let prodExistentes = await this.getAll()
            let ultimoProducto = prodExistentes[prodExistentes.length - 1]
            nuevoId = ultimoProducto.id + 1
            producto.id = nuevoId
            prodExistentes.push(producto)
            
            productos = prodExistentes
        } else {
            nuevoId = 1
            producto.id = nuevoId
            productos.push(producto)
        }
        
        try {
            fs.promises.writeFile(this.nombre, JSON.stringify(productos))
            console.log('Agregado');
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async getById (id) {
        let prodExistentes = await this.getAll()
        let objeto = prodExistentes.find(producto => producto.id == id)
        return objeto           
    }

    async getAll() {
        try {
            const productos = await fs.promises.readFile(this.nombre, 'utf-8')

            return JSON.parse(productos) 
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById (id) {
        let prodExistentes = await this.getAll()
        let objetos = prodExistentes.filter(producto => producto.id != id)

        try {
            fs.promises.writeFile(this.nombre, JSON.stringify(objetos))
            console.log('Producto eliminado');
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteAll () {
        try {
            fs.promises.writeFile(this.nombre, JSON.stringify([]))
            console.log('Productos eliminados');
            
        } catch (error) {
            console.log(error);
            
        }
    }
}

// contenedor.getAll().then(resultado => {
//     console.log("Todos los productos", resultado)
// })

// contenedor.getById(2).then(resultado => {
//     console.log("Producto por id", resultado)
// })

// contenedor.deleteById(1)

// contenedor.getAll().then(resultado => {
//     console.log("Productos disponibles", resultado)
// })

// contenedor.deleteAll()

// contenedor.getAll().then(resultado => {
//     console.log("Productos disponibles", resultado)
// })



