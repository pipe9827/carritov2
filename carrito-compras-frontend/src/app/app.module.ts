import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TiendaComponent } from './tienda/tienda.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    ListaProductoComponent,
    TiendaComponent,
    ListaUsuarioComponent,
    CarritoComponent,
    ActualizarProductoComponent,
    ActualizarUsuarioComponent,
    RegistroProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
