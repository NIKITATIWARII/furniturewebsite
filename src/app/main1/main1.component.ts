import { Component, OnInit } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { MatDialog } from '@angular/material/dialog';
import { Main1Item } from '../models/main1-item';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component implements OnInit {
  itemList: Main1Item[]=[]
  mytask = '';
   searchKey:string = '';
  constructor(private api: ApiService , private dialog:MatDialog) { }

  ngOnInit(): void {
    this.itemList = this.api.getItems();
    this.api.search.subscribe((val) =>{
      this.searchKey = val;
    })
  }
  onadd(){
    // this.itemList.push({id:7, name:'mytask.name', imageUrl:'/assets/images/wfh.jpg', routerLink:'/wfh'})
    // console.log(this.itemList);
    this.dialog.open(AddComponent)
  }
}
