import { Component } from '@angular/core';
import { ListaCursos } from 'src/app/cursos/modelos/lista-cursos';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  cursos: ListaCursos[] = [];
  displayedColumns = ['nome', 'Categoria'];
ListaCursos: any;


}
