import { Component, Input, OnInit } from '@angular/core';
import { Places } from 'src/app/models/places';
import { PlaceService } from 'src/app/service/place.service';
import { ActivatedRoute } from '@angular/router';
import { placements } from '@popperjs/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
 @Input()
  plac!: Places;
 public cityName:any;
  constructor(private place: PlaceService, activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }


}
