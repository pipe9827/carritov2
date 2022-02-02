import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos: Producto[];
  carrito =faShoppingCart;

  constructor(private productoService:ProductoService, private router:Router) { }

  ngOnInit(): void {
      this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoService.obtenerListaProductos().subscribe( dato =>{
      this.productos = dato;
    });
  }

  mandarProducto(id:Number){
   
      this.router.navigate(["detalle-producto",id]);

  
  }

}
