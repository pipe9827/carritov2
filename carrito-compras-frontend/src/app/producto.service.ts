import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  // Ruta del rest que se va a cosumir 
  private baseURL= "http://localhost:8080/api/v1/producto";

  constructor(private httpClient : HttpClient) { }

   // este metodo nos sirve para obtener todos los empleados
   obtenerListaProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

  obtenerProductoPorId(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURL}/${id}`)
  }

  // este metodo nos sirve para registrar un Producto
  resgistrarProducto(producto:Producto):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,producto);
  }

  actualizarProducto(id:number,producto:Producto):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,producto);
  }

  eliminarProducto(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
