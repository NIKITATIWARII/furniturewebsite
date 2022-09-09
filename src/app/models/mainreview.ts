export class Mainreview {
    id : number;
    name : string;
    city: string;
    rating:number;
    description: any;
    imageUrl: string;

    constructor(id:number,name:string, description: any ,imageUrl: string , city:string , rating:number){
        this.id = id
        this.name =name
        this.description = description
       this.city=city
        this.imageUrl = imageUrl
        this.rating = rating
       
      
        }
}
