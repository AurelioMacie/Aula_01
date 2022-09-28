import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title']

  constructor() { }

  ngOnInit(): void {
  }

}
