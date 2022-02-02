import { Component } from '@angular/core';
import { faCoffee, faHome, faList, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carrito-compras-frontend';
  faCoffee = faCoffee;
  lista =  faList;
  carrito =faShoppingCart;
  home= faHome;
  add = faPlus;
}
