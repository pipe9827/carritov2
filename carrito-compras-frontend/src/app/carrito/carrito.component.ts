import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

import { Detalle } from '../detalle';
import { ProductoService } from '../producto.service';
import { OrdenService } from '../orden.service';
import { Orden } from '../orden';
import { DetalleService } from '../detalle.service';
import { forkJoin, Observable } from 'rxjs';
import { LiteralExpr } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  orden:Orden;
  detalles:Detalle[];
  detalle:Detalle;
  sumaTotal:Number;
  productosAgregados:any[];
  


  constructor( private productoServicio:ProductoService, private ordenService:OrdenService,
    private detalleService:DetalleService) { }

  ngOnInit(): void {
   

    this.actualizarCarrito();
    
  }

  comprar(){

    if(this.productosAgregados.length == 0){
      Swal.fire(
        'Carrito vacio',
        'Por favor agregue items al carrito',
        'error'
      )
    }else{
      this.orden = new Orden();
      this.detalles = [];
    
   
    
    this.orden.precioTotal = this.suma();
    
    this.ordenService.registrarOrden(this.orden).subscribe((orden_creada : Orden)=>{
      this.productosAgregados.forEach((element:any)=>{
        this.detalle = new Detalle();
        this.detalle.idOrden = orden_creada.idOrden;
        this.detalle.cantidad = element.cant;
        this.detalle.idProducto = element.id;
        this.detalleService.resgistrarDetalle(this.detalle).subscribe((detalle_creado : Detalle)=>{
          localStorage.removeItem("detalle");
          this.productosAgregados = [];
        })
      });
      Swal.fire(
        'Compra exitosa',
        'numero de orden: '+orden_creada.idOrden+" Cantidad a pagar: "+orden_creada.precioTotal ,
        'success'
      )
    })
   
    }
    
  }

  eliminarProducto(id:Number){
    console.log(id);
    let detalles = JSON.parse(localStorage.getItem("detalle") || '{}') ;
    let i=0;
   
    detalles.forEach((element:any) => {
      if (element.idProducto == id) {
        detalles.splice(i,1);
      }
      i++;
    });
    localStorage.setItem("detalle", JSON.stringify(detalles));
    this.actualizarCarrito();

  }

  actualizarCarrito(){
    this.productosAgregados = [];

    let detalles = JSON.parse(localStorage.getItem("detalle") || '{}') ; 
    if( detalles.length > 0){
      detalles.forEach((element : any) => {
        this.productoServicio.obtenerProductoPorId(element.idProducto).subscribe((result) => {
          this.productosAgregados.push({
            'id' : result.idProducto,
            'name' : result.nombre,
            'desc' : result.descripcion,
            'img' : result.urlImagen,
            'price' : result.precio,
            'cant' : element.cantidad,
            'total' : Number(element.cantidad) * Number(result.precio)
          });
        })
      });
      this.sumaTotal = this.suma();
    }
  }

  suma():number{
    let suma = 0;
    this.productosAgregados.forEach((element:any)=>{
      suma = Number(suma) + Number(element.total);
    });
    return suma;
  }

}
