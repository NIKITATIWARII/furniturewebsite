import { Injectable } from '@angular/core';
import { Places } from '../models/places';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  place:Places[]=[
    new Places(1, 'Kalyan Nagar, Bangalore' , 'This is Place1' ,'https://images.unsplash.com/photo-1632854270121-0b0d4f33c99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','Bangalore'),
    new Places(1, 'WhiteFeild, Bangalore' , 'This is Place2' , 'https://images.unsplash.com/photo-1613837233238-c1e78d8b8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','Bangalore'),
    
   
  ]
  place2:Places[]=[
    new Places(2, 'Andheri East, Mumbai' , 'This is Place1' ,'https://images.unsplash.com/photo-1632854270121-0b0d4f33c99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','Mumbai' ),
    new Places(2, 'Andheri West, Mumbai' , 'This is Place2' , 'https://images.unsplash.com/photo-1613837233238-c1e78d8b8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','Mumbai'),
  ]
  place3:Places[]=[
    new Places(3, 'PrahladNagar, Ahemdabad' , 'This is Place1' ,'https://images.unsplash.com/photo-1632854270121-0b0d4f33c99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','Ahemdabad'),
    new Places(3, 'badodara, Mumbai' , 'This is Place2' , 'https://images.unsplash.com/photo-1613837233238-c1e78d8b8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'Ahemdabad'),
  ]
  place4:Places[]=[
    new Places(4, 'Kirti Nagar, Delhi' , 'This is Place1' ,'https://images.unsplash.com/photo-1632854270121-0b0d4f33c99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','Delhi'),
    new Places(4, 'Sultanpur, Delhi' , 'This is Place2' , 'https://images.unsplash.com/photo-1613837233238-c1e78d8b8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'Delhi'),
  ]
  place5:Places[]=[
    new Places(5, 'Vaishali Nagar, Jaipur' , 'This is Place1' ,'https://images.unsplash.com/photo-1632854270121-0b0d4f33c99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'Jaipur'),
    new Places(5, 'Ambabari, Jaipur' , 'This is Place2' , 'https://images.unsplash.com/photo-1613837233238-c1e78d8b8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'Jaipur'),
  ]
  place6:Places[]=[
    new Places(6, 'Kharadi ,Pune' , 'This is Place1' ,'https://images.unsplash.com/photo-1632854270121-0b0d4f33c99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' , 'Pune'),
    new Places(6, 'Baner,Pune' , 'This is Place2' , 'https://images.unsplash.com/photo-1613837233238-c1e78d8b8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'Pune'),
  ]
  Cities:any[]=[...this.place, ...this.place2,...this.place3,...this.place4,...this.place5,...this.place6]
FetchSingleCity(id:any){
return this.place;
}
  constructor() { }
 getPlaces():Places[]{
  return this.place;
 }
 getCities():Places[]{
  return this.Cities
 }
 getUser(id:any){
  return ("this.cities" +id);
 }
 getPlace2():Places[]{
  return this.place2
 }
 getPlace3():Places[]{
  return this.place3
 }
 getPlace4():Places[]{
  return this.place4
 }
 getPlace5():Places[]{
  return this.place5
 }
 getPlace6():Places[]{
  return this.place6
 }
}
