import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Professor} from "../model/professor";
import {WebService} from "../web.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent {
  professor: Professor = new Professor();

  constructor(private web: WebService, private router: Router) { }

  ngOnInit(): void {
  }


  salvarProfessor(forms: NgForm) {
    console.log("aaa")
    if (forms.valid){
      this.web.salvarProfessor(this.professor).subscribe((response) => {
        if (response.ok){
          alert("Cadastrado com sucesso!")
          this.router.navigate(["professores"])
        }
      })
    }
  }
}
