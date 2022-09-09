import { Component, OnInit } from '@angular/core';
import { Main1Item } from '../models/main1-item';
import { ApiService } from '../service/api.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
itemList:Main1Item[]=[];
url='';
mytask='';
link='';
idee:number=0;
  constructor(private api: ApiService , private dialogRef:MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
    this.itemList = this.api.getItems();
  }
addItem(){
  this.itemList.push({id:this.idee, name:this.mytask, imageUrl:this.url, routerLink:this.link })
  this.dialogRef.close();
  console.log(this.itemList)
}
}
