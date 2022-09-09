import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Review } from '../models/review';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {
  decorList:Review[]=[]
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.decorList=this.apiService.getShows();
  }

}
