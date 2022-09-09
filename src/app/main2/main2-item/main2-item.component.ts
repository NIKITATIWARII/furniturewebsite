import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-main2-item',
  templateUrl: './main2-item.component.html',
  styleUrls: ['./main2-item.component.css']
})
export class Main2ItemComponent implements OnInit {
  @Input()
  decorItem!: Review; 
  constructor() { }

  ngOnInit(): void {
  }

}
