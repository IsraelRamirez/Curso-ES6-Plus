const restaurApp = {};

restaurApp.platillos=[
    {
        platillo: "Pizza",
        precio: 25,
    },
    {
        platillo: "Hamburgueza",
        precio: 20
    },
    {
        platillo: "Fideos",
        precio: 40,
    }
]

restaurApp.funciones = {
    ordenar: id =>{
        console.log(`
        Tu platillo: ${restaurApp.platillos[id].platillo} se está preparando
        `);
    },
    agregarPlatillo: (platillo, precio) =>{
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: (platillos )=>{
        console.log("Bienvenido a nuestro menu");
        platillos.forEach(platillo => {
            console.log(`-> ${platillo.platillo} : $${platillo.precio}`)
        });
    }
}

console.log(restaurApp);
restaurApp.funciones.mostrarMenu(restaurApp.platillos)
restaurApp.funciones.agregarPlatillo("Helado", 10)
restaurApp.funciones.mostrarMenu(restaurApp.platillos)

restaurApp.funciones.ordenar(2)