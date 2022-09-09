import { Component, OnInit , Input} from '@angular/core';
import { Places } from '../models/places';
import { PlaceService } from '../service/place.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Main1Item } from '../models/main1-item';
import { filter } from 'rxjs';

@Component({
  selector: 'app-city1',
  templateUrl: './city1.component.html',
  styleUrls: ['./city1.component.css']
})
export class City1Component implements OnInit {
   places:Places[]=[];
   places2:Places[]=[]
   storeitems: any;
   cityName:any;
   cityId:any;
   
  constructor(private place:PlaceService, private activatedRoute:ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    // this.places = this.place.getCities();
    // this.activatedRoute.paramMap.subscribe(param=>{
      // let pid = param.get('id');
      // console.log(param.get('name'));
      this.cityName=this.activatedRoute.snapshot.paramMap.get('name');
       this.cityId = this.activatedRoute.snapshot.paramMap.get('id')
      console.log(this.cityId, 'getCity')
      if(this.cityId){
      this.places =  this.place.getCities().filter((value:any)=>{
         return value.id == this.cityId;
        })
        console.log(this.places);
      }
   
    // })

  }

}
