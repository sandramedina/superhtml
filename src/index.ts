const btnComprar = document.getElementById("boton-comprar");
const containerProductos = document.getElementById("container-productos");
const btnAgregar = document.getElementById("boton-agregar");
let valorTotal: number = 0;
let stock: number[] = [15, 10, 8, 20, 5];
let productos: string[] = [
  "fideos",
  "pate",
  "shampoo",
  "desodorante",
  "afeitadora"
];
let precioUnitario: number[] = [100, 75, 125, 90, 50];

let cargarProductos = () => {
  for (let i = 0; i < stock.length; i++){
    let divProducto = document.createElement("div");
    divProducto.classList.Add("item-producto");
    divProducto.id = `producto-${i}`
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = productos[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = `$${precioUnitario[i]}`;
    let selectorCantidad = document.createElement("input");
    selectorCantidad.id= `selector-cantidad-${i}`;
    selectorCantidad.type= "number";
    selectorCantidad.max= String(stock[i]);
    selectorCantidad.min = 0;
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(selectorCantidad);
    containerProductos.appendChild(divProducto);
  }
} 
//``
let comprar = () => {
  for (let i = 0; i < stock.length; i++) {
    let selectorCantidad = document.getElementById(`selector-cantidad-${i}`);
    let cantidadSeleccionada = Number(selectorcantidad.value);
    if (cantidadSeleccionada > 0) {
      alert(`Compraste ${cantidadSeleccionada} unidades de ${productos[i]}`);
      valorTotal += precioUnitario[i] * cantidadSeleccionada; 
    }
  }
if (valorTotal > 0) {
  alert (`el costo total de su compra es $${valorTotal}`)

} else {
  alert (`Tiene que elegir almenos un producto`);
}
};

let agregar = () => {
  let newProduct = document.getElementById("newProduct");
  let newPrecio = document.getElementById("newPrecio");
  let newCantidad = document.getElementById("newCantidad");

  let nombreNewProduct = document.createElement("pro");
  nombreNewProduct.innerHTML = newProduct.value;
  

}
