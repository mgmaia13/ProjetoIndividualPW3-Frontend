import { Component } from '@angular/core';
import {Professor} from "../model/professor";
import {WebService} from "../web.service";

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']

})

export class ProfessoresComponent {

  professores!: Professor[]

  constructor(
    private web: WebService
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
    console.log("adicionaaa")

  }

  editarProfessor(professor: Professor) {
    console.log("editaaa")
  }

  deletaProfessor(professor: Professor) {
    console.log("deleta")
  }

}


