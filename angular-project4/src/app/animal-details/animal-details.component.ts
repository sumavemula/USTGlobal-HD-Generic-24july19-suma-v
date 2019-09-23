import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  @Input() animalDetail :any=' ';
  constructor() { }

  ngOnInit() {
  }

}
