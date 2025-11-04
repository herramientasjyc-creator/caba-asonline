import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Reservas', url: '/reservas', icon: 'calendar' },
    { title: 'Contacto', url: '/contacto', icon: 'call' }
  ];
}
