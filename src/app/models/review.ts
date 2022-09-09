export class Review {
    id : number;
    name : string;
    description: any;
    imageUrl: string;

    constructor(id:number,name:string, description: any ,imageUrl: string ){
        this.id = id
        this.name =name
        this.description = description
       
        this.imageUrl = imageUrl
       
      
        }
}
