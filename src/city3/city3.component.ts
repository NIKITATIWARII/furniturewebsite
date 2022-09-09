import { Component, OnInit } from '@angular/core';
import { Places } from '../models/places';
import { PlaceService } from '../service/place.service';

@Component({
  selector: 'app-city3',
  templateUrl: './city3.component.html',
  styleUrls: ['./city3.component.css']
})
export class City3Component implements OnInit {
  places:Places[]=[]
  constructor(private place:PlaceService) { }

  ngOnInit(): void {
    this.places = this.place.getPlace3()
  }

}
