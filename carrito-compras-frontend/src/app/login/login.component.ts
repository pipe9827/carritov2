import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario();
  msg ='';

  constructor(private _service : UsuarioService, private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
   this._service.loginUserFromRemote(this.usuario).subscribe(
     data => {
      Swal.fire({
        icon: 'success',
        title: 'Credenciales Correctas'
      })
              console.log(data);

              this._service.obtenerRolusuario(data).subscribe(Element=>{
                console.log(Element);
                sessionStorage.setItem("login", JSON.stringify(Element));
              })
              this._router.navigate(['/lista-producto']);

             } ,
     error => {console.log("exception ocurred");
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña incorrectos',
      footer: 'por favor intente de nuevo'
    })
     this.msg="Usuario o contraseña incorrectos, por favor intente de nuevo";
            }

   )
  }
  registrarUsuario(){
    this._router.navigate(['/registro-usuario']);
  }
}
