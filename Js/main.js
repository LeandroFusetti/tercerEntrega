
class Producto {
    constructor (nombre, precio, stock, id, img){
        this.nombre= nombre.toUpperCase ()
        this.precio= precio
        this.stock= stock
        this.id= id
        this.img= img
        
    }
}


// Array de articulos
const ListaProductos = []

ListaProductos.push  (new Producto ("Palo y Escoba Condor", 1776, 20, 1,"../img/escobaPalaCondor.jpg"))
ListaProductos.push (new Producto ("Pala Sanitaria", 5125, 15, 2, "../img/palaSanitaria(4260)Italimpia.jpg"))
ListaProductos.push  (new Producto ("Paño Microfibra Pm400 Italimpia", 950, 35, 3, "../img/pañoMicrofibra.jpg"))
ListaProductos.push (new Producto ("Cesto Ventilado Redondo", 1500, 15, 4, "../img/cestoMultiusoVentiladoRedondo.jpg"))
ListaProductos.push (new Producto ("Balde Trapeador Escurridor", 3500, 15, 5, "../img/baldeTrapeadorEscurridor.jpg"))
ListaProductos.push (new Producto ("Escoba Amerimax", 242, 15, 6, "../img/escobaAmerimaxPlastica.jpg" ))
ListaProductos.push (new Producto ("Paños Montimer por unidad", 145, 15, 7,"../img/pañoMontimer.jpg"  ))
ListaProductos.push (new Producto ("Cabo Fibra De Vidrio Italimpia", 5125, 15, 8, "../img/caboDeFibraDeVidrio(1055)Italimpia.jpg"))

ListaProductos.push  (new Producto ("Brissa X 5 Lts. (sutter) Marina", 716, 30, 9,"../img/brissaX5Lts(sutter)Marina.jpg"))
ListaProductos.push (new Producto ("8m Classic X 5 Lts (diversey)", 2180, 12, 10, "../img/8mClassicX5Lts(diversey).jpg"))
ListaProductos.push  (new Producto ("Nobla Rosas Blancas X 5 Lts", 1119, 25, 11, "../img/noblaRosasBlancasX5Lts(diversey).jpg"))
ListaProductos.push (new Producto ("Limpiador Cif Baño X 5 Lts", 540, 19, 12, "../img/limpiadorCifBañoProfesionalX5Lts.jpg"))
ListaProductos.push (new Producto ("Des. Mochila Mr Musculo", 240, 25, 13, "../img/desodoranteMochilaX2Unid.MrMusculo.jpg"))
ListaProductos.push (new Producto ("Kit Auto de Molax 7unidades", 9673, 11, 14, "../img/kitMolaxAuto.jpg" ))
ListaProductos.push (new Producto ("Alcohol Etílico al 70%", 829, 45, 15,"../img/alcohol70.jpg"  ))
ListaProductos.push (new Producto ("Procenex y Lysoform", 680, 35, 16, "../img/comboLimpieza.jpg"))



    
//Carrito de compras
const carrito = []



// variables del carrito y suma
let total = []

let suma = 0;

let contador = 0


$(document).ready(function(){
    
    $("#local").on("click",agregar)
        
        function agregar(e){

            if(e.target.classList.contains("btn")){
                if (contador == 0 ){
                    let comprado =  ListaProductos.find(producto => producto.id == e.target.id)
        
                    carrito.push(comprado)  

                    const carritoSinDuplicados = [...new Set(carrito)];
                   
                    console.log(carritoSinDuplicados)



                    total.push(comprado.precio)    
        
                    tienda.innerHTML = " " 
        
                    for (const producto of carritoSinDuplicados){
                    
                       




                        $("#tienda").append(
                                            `<div class="col-lg-3" >
                                            <img src="${producto.img}" width="100px" height="100px"></img>
                                            <h4> ${producto.nombre} </h4>
                                            <p> Precio: ${producto.precio} </p>                   
                                            </div>
                                                `
                        )
                    }
                }
            }

// Boton de finalizar compra
            if(contador ==0){
                if(e.target.classList.contains("finCompra")){
                    for (let i = 0; i < total.length; i++) {
                        suma += total[i];
                    }

                    contador ++
                    console.log(suma);
            
                    $("#endShop").append(
                                        `
                                        <div>              
                                        <p> Total a pagar: $${suma} </p>
                                        </div>
                                        `
                    )
            
//Json de carrito 

                    const productosEnJson= JSON.stringify(carrito)
                    localStorage.setItem("productos" ,productosEnJson)
            
                    const carritoComprado =  JSON.parse(localStorage.getItem("productos"))
                    console.log(carritoComprado);
                
                }
            } 
        }
    }
)








