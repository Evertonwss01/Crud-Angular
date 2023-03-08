import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* Configurar o redirecinamento para Lista */
  {path: '', pathMatch: 'full', redirectTo: 'lista'},
  /* Carregamento lazi load, carregamento lento */
  {
    path: 'lista',
    loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
