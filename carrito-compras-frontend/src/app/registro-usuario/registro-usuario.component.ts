import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario = new Usuario();

  constructor(private usuarioServicio: UsuarioService, private router: Router) { }

  ngOnInit(): void {
      
  }
  
  registerUser() {
    Swal.fire({
      title: 'Excelente!',
      text:'el usuario ha sido guardado con exito',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'OK',
      denyButtonText: `Cancelar`,
      icon:'success',
    }).then((result) => {
      this.usuarioServicio.resgistrarUsuario(this.usuario).subscribe(dato => {
        console.log(dato);
        
      }, error => console.log(error));
      if (result.isConfirmed) {
        this.irAlLogin();
      } 
    })
    
  }

  irAlLogin() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.registerUser;
  }
}
