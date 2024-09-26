const productos =[
    {
        id: "zapatilla-01",
        titulo: "Nike - Air Force 1 Negro",
        precio: 60000,
        img: "./img/zapatilla-01.avif",
    },
    {
        id: "zapatilla-02",
        titulo: "Adidas - Break Start<",
        precio: 45000,
        img: "./img/zapatilla-02.avif",
    },
    {
        id: "zapatilla-03",
        titulo: "Adidas - Forum Low",
        precio: 70000,
        img: "./img/zapatilla-03.avif",
    },
    {
        id: "zapatilla-04",
        titulo: "Nike - Full Force Lo Cob",
        precio: 65000,
        img: "./img/zapatilla-04.avif",
    },
    {
        id: "zapatilla-05",
        titulo: "Nike - Full Force Lo",
        precio: 93000,
        img: "./img/zapatilla-05.avif",
    },
    {
        id: "zapatilla-06",
        titulo: "Adidas - Midcity Mid",
        precio: 55000,
        img: "./img/zapatilla-06.avif",
    },
    {
        id: "zapatilla-07",
        titulo: "Puma - Rebound V6 Low",
        precio: 80000,
        img: "./img/zapatilla-07.avif",
    },
    {
        id: "zapatilla-08",
        titulo: "Nike - Tech Hera Blanco",
        precio: 90000,
        img: "./img/zapatilla-08.avif",
    },
    {
        id: "zapatilla-09",
        titulo: "Nike - Tech Hera",
        precio: 88000,
        img: "./img/zapatilla-09.avif",
    },
    {
        id: "zapatilla-10",
        titulo: "Skechers - Urbana",
        precio: 33000,
        img: "./img/zapatilla-10.avif",
    }
];


const contenedorProductos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");

let carrito=[];

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    // Verificar si el producto ya está en el carrito (comparando por 'id')
    let productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        // Si el producto ya existe, puedes actualizar la cantidad si lo deseas
        productoExistente.cantidad += 1; // Aumenta la cantidad en 1
    } else {
        // Si no existe, agregarlo al carrito con una cantidad inicial de 1
        carrito.push({
            ...producto,
            cantidad: 1 // Añadir la propiedad 'cantidad' al nuevo producto
        });
    }

   
    mostrarCarrito();
    
}


function mostrarCarrito(){
    console.log(`Producto agregado: ${carrito} (Cantidad: 1)`);
    $(".carrolo").html("");

    var acumulador = `<table class="table">`;
    var total = 0;

    carrito.forEach(producto=>{
        acumulador += "<tr><td>"+producto.titulo+ "</td>";
        acumulador += "<td>"+producto.cantidad+ "</td>";
        acumulador += "<td>"+(producto.precio*producto.cantidad)+ "</td>";
        acumulador += `<td><button type="button" class="btn btn-warning" onclick="eliminarDelCarrito(`+"`"+producto.id +"`"+`)" >Quitar producto</button></td><tr>`;
        total += (producto.precio*producto.cantidad);
    });
    acumulador += "</table>";
    $(".carrolo").html(acumulador);
    $(".totalApagar").html(total);
}

// Función para eliminar producto del carrito por id
function eliminarDelCarrito(idProducto) {
    // Buscar el índice del producto en el carrito
    const indiceProducto = carrito.findIndex(producto => producto.id === idProducto);
    
    if (indiceProducto !== -1) {
        // Si el producto existe, eliminarlo del array
        carrito.splice(indiceProducto, 1);
        console.log(`Producto con id ${idProducto} eliminado del carrito.`);
    } else {
        console.log(`Producto con id ${idProducto} no encontrado en el carrito.`);
    }
    mostrarCarrito();
}










productos.forEach((producto)=>{
    let div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML=`
    <img class="producto-img" src=${producto.img}>
    <h3>${producto.titulo}</h3>
    <p>${producto.precio}</p>
    `;

    let button = document.createElement("button");
    button.classList.add("producto-btn");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () =>{
        console.log(producto);
        agregarAlCarrito(producto);
        console.log(carrito);
    })

    div.append(button);
    contenedorProductos.append(div);

})
