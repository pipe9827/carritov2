import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const routes: Routes = [
  {path:'',component:TiendaComponent},
  {path:'login',component:LoginComponent},
  {path:'registro-usuario',component:RegistroUsuarioComponent},
  {path:'registro-producto',component:RegistroProductoComponent},
  {path:'actualizar-usuario/:id',component:ActualizarUsuarioComponent},
  {path:'actualizar-producto/:id',component:ActualizarProductoComponent},
  {path:'lista-producto' , component:ListaProductoComponent},
  {path:'lista-usuario' , component:ListaUsuarioComponent},
  {path:'detalle-producto/:id' , component:DetalleProductoComponent},
  {path:'carrito' , component:CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
