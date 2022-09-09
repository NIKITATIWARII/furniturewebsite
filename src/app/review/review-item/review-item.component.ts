import { Component, OnInit , Input} from '@angular/core';
import { Mainreview } from 'src/app/models/mainreview';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  @Input()
  reviewItem!: Mainreview;
  constructor() { }

  ngOnInit(): void {
  }

}
