import { Component, OnInit,Input } from '@angular/core';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-city3places',
  templateUrl: './city3places.component.html',
  styleUrls: ['./city3places.component.css']
})
export class City3placesComponent implements OnInit {
  @Input() plac: any
  constructor() { }

  ngOnInit(): void {
  }

}
