import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuarioService.obtenerListaUsuarios().subscribe( dato =>{
      this.usuarios = dato;
    });
  }

  actualizarUsuario(id:number){
    this.router.navigate(['actualizar-usuario',id]);
  }

  eliminarUsuario(id:number){
    Swal.fire({
      title: 'Desea eliminar este usuario ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
      icon:'warning',
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(id).subscribe(dato => {
          console.log(dato);
          this.obtenerUsuarios();
        });
        Swal.fire('Usuario Elminado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Accion cancelada', '', 'info')
      }
    })
    
  }

}
