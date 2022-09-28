import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent implements OnInit {

  @Input() nome: string = '';
  @Input() userData!: {email: string, role: string}

  constructor() { }

  ngOnInit(): void {
  }

}
