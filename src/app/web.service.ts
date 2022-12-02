import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Professor} from "./model/professor";

@Injectable({
  providedIn: 'root'
})
export class WebService {
  baseUrl = "http://localhost:8080/api/professores"

  constructor(
    private http: HttpClient
  ) { }
  getProfessores(){
      return this.http.get<Professor[]>(this.baseUrl, {observe: "response"})
  }

  setProfessor(professor: Professor){
    let professorData = new HttpParams()
    professorData = professorData.set("nome", professor.name)
    professorData = professorData.set("idade", String(professor.idade))
    professorData = professorData.set("sexo", professor.sexo)
    professorData = professorData.set("telefone", String(professor.telefone))
    professorData = professorData.set("endereco", professor.endereco)
    professorData = professorData.set("areaAtuacao", professor.areaAtuacao)
    professorData = professorData.set("salario", professor.salario)
    return this.http.put<Professor>(this.baseUrl, professorData, {observe: "response"})
  }
}

