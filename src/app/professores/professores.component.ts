import { Component } from '@angular/core';
import {Professor} from "../model/professor";
import {WebService} from "../web.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']

})

export class ProfessoresComponent {

  professores!: Professor[]
  constructor(
    private web: WebService,
    private router: Router
  ){
  }

  ngOnInit(){
    this.web.getProfessores().subscribe((response)=>{
      if(response.ok){
        this.professores = response.body!
        console.log((response.body))
      }
    })
  }

  adicionarProfessor() {
    this.router.navigate(["cadastrar"])
  }

  editarProfessor(professor: Professor) {
    this.router.navigate(["editar", professor.id])
  }

  deletaProfessor(professor: Professor) {
    this.web.deleteProfessorById(professor).subscribe((response) => {
      if(response.ok){
        alert("Deletado com sucesso!")
        this.professores.forEach((professorGet) => {
          if(professorGet.id == professor.id){
            let index = this.professores.indexOf(professor)
            this.professores.splice(index, 1)
          }
        })
      }
    })
  }
}


