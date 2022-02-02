import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from './detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

   // Ruta del rest que se va a cosumir 
   private baseURL= "http://localhost:8080/api/v1/orden";

   constructor(private httpClient : HttpClient) { }
 
    // este metodo nos sirve para obtener todos los empleados
    obtenerListaDetalles():Observable<Detalle[]>{
     return this.httpClient.get<Detalle[]>(`${this.baseURL}`);
   }
 
   obtenerDetallePorId(id:number):Observable<Detalle>{
     return this.httpClient.get<Detalle>(`${this.baseURL}/${id}`);
   }
 
   // este metodo nos sirve para registrar un Producto
   resgistrarDetalle(detalle:Detalle):Observable<Detalle>{
     return this.httpClient.post<Detalle>("http://localhost:8080/api/v1/orden/detalle",detalle);
   }
}
