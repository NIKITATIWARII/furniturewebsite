import { Component, OnInit } from '@angular/core';
import { Mainreview } from '../models/mainreview';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 reviewList:Mainreview[]=[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.reviewList=this.apiService.getReview();
  }

}
