export class Product {
  [x: string]: any;
    id : number;
    name : string;
    description: string;
    price: number;
    imageUrl: string;
    qty:number;
    
  constructor(id:number,name:string, description: string, price:number,imageUrl: string , qty: number){
  this.id = id
  this.name =name
  this.description = description
  this.price = price
  this.imageUrl = imageUrl
  this.qty = qty

  }
}
