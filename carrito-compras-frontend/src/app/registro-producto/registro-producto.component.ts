import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {
  producto = new Producto();

  constructor(private productoServicio:ProductoService , private router:Router) { }

  ngOnInit(): void {
  }

  registerProducto(){
    console.log(this.producto);
    Swal.fire({
      title: 'Excelente!',
      text:'el producto ha sido guardado con exito',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'OK',
      denyButtonText: `Cancelar`,
      icon:'success',
    }).then((result) => {
      this.productoServicio.resgistrarProducto(this.producto).subscribe(dato => {
        console.log(dato);
        
      }, error => console.log(error));
      if (result.isConfirmed) {
        this.irAlCarrito();
      } 
    })
  }

  irAlCarrito(){
      this.router.navigate(['/']);
  }
}