import { Component, OnInit } from '@angular/core';
import { Main1Item } from '../models/main1-item';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
 itemList: Main1Item[]=[]
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.itemList = this.api.getStore();
  }

}
