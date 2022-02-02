import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Detalle } from '../detalle';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  carrito =faShoppingCart;
  id:number;
  producto:Producto;
  detalles:Detalle[];
  detalle = new Detalle()
  constructor(private route:ActivatedRoute, private productoServicio:ProductoService, private router:Router) { }

  ngOnInit(): void {  

     this.detalles = [];
     this.detalle.cantidad =1;
    
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(dato =>{
      this.producto = dato;
     
    });
  }

  agregarAlCarrito(id:number,cantidad:number){
      //console.log(this.detalle.cantidad);
      this.detalle.idProducto = id;
      
      if(localStorage.getItem("detalle")===null){
        this.detalles.push(this.detalle);
        localStorage.setItem("detalle", JSON.stringify(this.detalles));
      }else{
        this.detalles = JSON.parse(localStorage.getItem("detalle") || '{}');
        
        if(this.detalles.find(detalles => detalles.idProducto == this.detalle.idProducto)){
          
          this.detalles.forEach((element : Detalle) => {
              if(element.idProducto == this.detalle.idProducto){
                element.cantidad = element.cantidad + this.detalle.cantidad;
              }
          })
        }else{
          this.detalles.push(this.detalle);
        }
        
        localStorage.setItem("detalle", JSON.stringify(this.detalles));
      }
      this.router.navigate(['/']);
     
      

  }
}
