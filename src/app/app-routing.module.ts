import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfessoresComponent} from "./professores/professores.component";

const routes: Routes = [
  {path:"alunos", component: ProfessoresComponent},
  {path:"", redirectTo: "/alunos", pathMatch: "full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
