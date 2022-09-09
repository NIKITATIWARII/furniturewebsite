import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Product[]=[]
  searchkey:string="";
  proId:any;
  proName:any;
  constructor(private apiService:ApiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.productList=this.apiService.getProducts();
    this.proName = this.activatedRoute.snapshot.paramMap.get('name');
    this.proId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.productList  = this.apiService.getProducts();
    console.log(this.proId , 'getproduct')
   if(this.proId){
    this.productList = this.apiService.getProducts().filter((value:any)=>{
      return value.id == this.proId;
    })
    console.log(this.productList);
   }
  }

}
