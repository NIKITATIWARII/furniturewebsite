import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['assets/images/wall2.jpg', 'assets/images/wall3.jpg' , 'assets/images/wall4.jpg']
}
