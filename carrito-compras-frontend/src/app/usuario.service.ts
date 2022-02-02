import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Ruta del rest que se va a cosumir 
  private baseURL = "http://localhost:8080/api/v1/usuarios";

  constructor(private httpClient: HttpClient) { }

  // este metodo nos sirve para obtener todos los usuarios
  obtenerListaUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  loginUserFromRemote(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>("http://localhost:8080/api/v1/login",usuario);
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`)
  }

  // este metodo nos sirve para registrar un empleado
  resgistrarUsuario(usuario: Usuario): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, usuario);
  }

  
  actualizarUsuario(id:number,usuario:Usuario):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,usuario);
  }
  
  eliminarUsuario(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  obtenerRolusuario(usuario:Usuario): Observable<Rol> {
    return this.httpClient.post<Rol>(`${this.baseURL}/rol`,usuario);
  }
  
}
