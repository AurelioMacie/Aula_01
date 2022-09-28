import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {
  nome: string = 'Aurélio Macie';
  idade: number = 24;
  job = 'Programador';
  hobbies = ["Treinar", "Lutar", "Programar"];
  carro ={
    nome : 'Skyline',
    ano : 2022,
    cor : 'Preto',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
