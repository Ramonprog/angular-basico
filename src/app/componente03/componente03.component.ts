import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css',
})
export class Componente03Component {
  imagem: string = '';

  alterarImagem() {
    if (this.imagem === '') {
      this.imagem = 'https://via.placeholder.com/150';
    } else {
      this.imagem = '';
    }
  }
}
