import { Component, OnInit,Input } from '@angular/core';
import { Main1Item } from 'src/app/models/main1-item';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-main1-item',
  templateUrl: './main1-item.component.html',
  styleUrls: ['./main1-item.component.css']
})
export class Main1ItemComponent implements OnInit {
  @Input()
  main1Item!: Main1Item;
  constructor() { }

  ngOnInit(): void {
  }

}
