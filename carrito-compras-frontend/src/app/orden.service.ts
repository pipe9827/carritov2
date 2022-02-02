import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orden } from './orden';
import { Detalle } from './detalle';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  // Ruta del rest que se va a cosumir 
  private baseURL= "http://localhost:8080/api/v1/orden";

  constructor(private httpClient : HttpClient) { }

   // este metodo nos sirve para obtener todos los empleados
   obtenerListaOrdenes():Observable<Orden[]>{
    return this.httpClient.get<Orden[]>(`${this.baseURL}`);
  }

  obtenerOrdenPorId(id:number):Observable<Orden>{
    return this.httpClient.get<Orden>(`${this.baseURL}/${id}`)
  }

  // este metodo nos sirve para registrar un Producto
  registrarOrden(orden:Orden) : Observable<Orden>{
    return this.httpClient.post<Orden>(`${this.baseURL}`, orden);
  }
  
}
