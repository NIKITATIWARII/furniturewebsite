import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Main1Component } from 'src/app/main1/main1.component';
import { Main1Item } from 'src/app/models/main1-item';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {
  @Input()
  storeItem!: Main1Item;
public cityId:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = (this.activatedRoute.snapshot.paramMap.get('id'))
    this.cityId =id;
  }

}
