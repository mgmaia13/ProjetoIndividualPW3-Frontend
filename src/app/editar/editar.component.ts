import { Component } from '@angular/core';
import {Professor} from "../model/professor";
import {NgForm} from "@angular/forms";
import {WebService} from "../web.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  professor: Professor = new Professor();
  constructor(private web: WebService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void{
    let id = this.route.snapshot.paramMap.get("id")
    this.web.getProfessoresById(id!).subscribe((response) => {
      if (response.ok){
        this.professor = response.body!
      }
    })
  }

  editarProfessor(forms: NgForm) {

      if (forms.valid){
        this.web.setProfessor(this.professor).subscribe((response) => {
          if (response.ok){
            alert("Atualizado com sucesso!")
            this.router.navigate(["professores"])
          }
        })
      }
  }
}
