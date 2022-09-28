import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario = 'Aurelio';
  userData = {
    email: 'aurelio.junior02@gmail.com',
    role: 'Administrador',
  }


  title = 'aula_01';
}
