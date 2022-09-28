import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/interface/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = '';


  constructor(private listService : ListService) {
    this.getAnimals();
   }

  removeAnimal(animal: Animal){
   this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals)) ;
  }


  ngOnInit(): void {
  }

  showAge(animal: Animal): void{
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos de idade`;
  }

}
