import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  id:number;
  usuario:Usuario;
  constructor(private route:ActivatedRoute, private usuarioServicio:UsuarioService, private router:Router) { }

  ngOnInit(): void {  
    this.id = this.route.snapshot.params['id'];
    this.usuario = new Usuario();
    this.usuarioServicio.obtenerUsuarioPorId(this.id).subscribe(dato =>{
      this.usuario = dato;
    }, error => console.log(error));
  }

  irAlaListaUsuarios(){
    this.router.navigate(["/lista-usuario"]);
  }
  onSubmit() {
    Swal.fire({
      title: 'Excelente!',
      text:'el usuario ha sido actualizado con exito',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'OK',
      denyButtonText: `Cancelar`,
      icon:'success',
    }).then((result) => {
      this.usuarioServicio.actualizarUsuario(this.id,this.usuario).subscribe(dato => {
       
      });
      if (result.isConfirmed) {
        this.irAlaListaUsuarios();
      } 
    })
    
  }

}
