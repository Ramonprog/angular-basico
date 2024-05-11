import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  standalone: true,
  imports: [],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css',
})
export class Componente02Component {
  // não temos a palavra reservada function

  mensagem() {
    alert('Olá, mundo!');
  }
}
