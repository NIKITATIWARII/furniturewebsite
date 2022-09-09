export class Main1Item {
    id : number;
    name : string;
    imageUrl: string;
    routerLink: string;

    constructor(id:number,name:string,imageUrl:string,routerLink:string)
    {
        this.id = id
        this.name =name
        this.imageUrl= imageUrl
        this.routerLink=routerLink
    }
}
