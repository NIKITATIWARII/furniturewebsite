export class Places {
    id : number;
    name : string;
    description: string;
    imageUrl: string;
    City:string

    constructor(id:number,name:string, description: string,imageUrl: string,City:string){
        this.id = id
        this.name =name
        this.description = description
        this.imageUrl = imageUrl
        this.City = City
        }
}
