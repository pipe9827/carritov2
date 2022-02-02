import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  id:number;
  producto:Producto;
  constructor(private route:ActivatedRoute, private productoServicio:ProductoService, private router:Router) { }

  ngOnInit(): void {  
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(dato =>{
      this.producto = dato;
    }, error => console.log(error));
  }

  irAlaListaProductos(){
    this.router.navigate(["/lista-producto"]);
  }
  onSubmit() {
    Swal.fire({
      title: 'Excelente!',
      text:'el producto ha sido actualizado con exito',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'OK',
      denyButtonText: `Cancelar`,
      icon:'success',
    }).then((result) => {
      this.productoServicio.actualizarProducto(this.id,this.producto).subscribe(dato => {
       
      });
      if (result.isConfirmed) {
        this.irAlaListaProductos();
      } 
    })
    
  }

}
