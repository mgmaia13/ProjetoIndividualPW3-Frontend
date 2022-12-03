import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfessoresComponent} from "./professores/professores.component";
import {CadastrarComponent} from "./cadastrar/cadastrar.component";
import {EditarComponent} from "./editar/editar.component";

const routes: Routes = [
  {path:"cadastrar", component: CadastrarComponent},
  {path:"editar/:id", component: EditarComponent},
  {path:"professores", component: ProfessoresComponent},
  {path:"", redirectTo: "/professores", pathMatch: "full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
