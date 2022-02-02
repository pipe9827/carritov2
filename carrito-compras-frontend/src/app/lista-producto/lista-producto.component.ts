import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  productos: Producto[];

  constructor(private productoService:ProductoService, private router:Router) { }

  ngOnInit(): void {

    this.obtenerProductos();
    
  }

  private obtenerProductos(){
    this.productoService.obtenerListaProductos().subscribe( dato =>{
      this.productos = dato;
    });
  }

  actualizarProducto(id:number){
    this.router.navigate(['actualizar-producto',id]);
  }

  eliminarProducto(id:number){
    Swal.fire({
      title: 'Desea eliminar este producto ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
      icon:'warning',
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.productoService.eliminarProducto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerProductos();
        });
        Swal.fire('Producto Elminado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Accion cancelada', '', 'info')
      }
    })
    
  }

  

}
