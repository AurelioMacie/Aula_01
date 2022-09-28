import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/interface/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 9}, 
    {name: "Frida", type: "Dog", age: 2},
    {name: "Bob", type: "Horse", age: 7},
  ];

  animalDetails = '';

  animal = {
    name: "Teste",
    type: "Alguma coisa",
    age: 10,
  }

  constructor(private listService : ListService) { }

  removeAnimal(animal: Animal){
   this.animals = this.listService.remove(this.animals, animal);
  }


  ngOnInit(): void {
  }

  showAge(animal: Animal): void{
    this.animalDetails = '$ {animal.name}';
  }

}
