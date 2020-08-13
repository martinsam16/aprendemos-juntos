import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PalabrasComponent} from './palabras/palabras.component';

const routes: Routes = [
  { path: '', redirectTo: 'palabras', pathMatch: 'full' },
  { path: 'palabras', component: PalabrasComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
