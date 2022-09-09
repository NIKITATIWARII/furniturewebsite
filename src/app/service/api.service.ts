import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Places } from '../models/places';
import { Review } from '../models/review';
import { BehaviorSubject } from 'rxjs';
import { Main1Item } from '../models/main1-item';
import { Mainreview } from '../models/mainreview';

@Injectable({
  providedIn: 'root'
  
})
export class ApiService {
products:Product[] = [
  new Product(1,'product 1', 'this is the product 1 description The product is really cool', 10000 , 'data:image/jpeg;base64,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',1),
  new Product(1,'product 2', 'this is the product 2 description The product is really cool', 15000 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfHQrRs7fudlVYs8iNttyXR2i9rXRT4paMA&usqp=CAU',1),
  new Product(1,'product 3', 'this is the product 1 description The product is really cool', 60000 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRJuOoD_QDuleMPELoVyfOT-BfahOfWiPeA&usqp=CAU',1),
  new Product(1,'product 4', 'this is the product 4 description The product is really cool', 11000 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCrm5YhvhE3TBtv0kZyKOCScGThzuS2H2kA&usqp=CAU',1),
  new Product(1,'product 5', 'this is the product 1 description The product is really cool', 12000 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfXt7fzcM99TOTFY4IyEPET6iHrdXfO-zwA&usqp=CAU',1),
  new Product(1,'product 6', 'this is the product 1 description The product is really cool', 130000 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSa9-zWzw2o8AWuatdB67I3klf3qeUkypqw&usqp=CAU',1),
  
]
beds : Product[] =[
  new Product(2, 'Bed1' ,'this is Bed 1' ,20000 ,'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(2, 'Bed2' ,'this is Bed 2' ,40000 ,'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(2, 'Bed3' ,'this is Bed 3' ,30000 ,'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(2, 'Bed4' ,'this is Bed 4' ,50000 ,'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(2, 'Bed5' ,'this is Bed 5' ,60000 ,'',1 ),
  new Product(2, 'Bed6' ,'this is Bed 6' ,70000 ,'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',1 ),
]
dinnings : Product[] =[
  new Product(3, 'dinning 1' ,'this is dinning 1' ,20000 ,'https://media.istockphoto.com/photos/people-toasting-with-glasses-of-water-picture-id1328754558?b=1&k=20&m=1328754558&s=170667a&w=0&h=nidzcwTSVBu39bll6Og62Xv7IrKT2mdc_bkhkF9bI9I=',1 ),
  new Product(3, 'dinning 2' ,'this is dinning 2' ,40000 ,'https://media.istockphoto.com/photos/modern-dining-table-with-two-chairs-picture-id1329279298?b=1&k=20&m=1329279298&s=170667a&w=0&h=jXMIHXf_Owkc6AXe7IzIp9iuhC7l726ju0YvsbhZJZc=',1 ),
  new Product(3, 'dinning 3' ,'this is dinning 3' ,30000 ,'https://images.unsplash.com/photo-1606660023296-81d67734170a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(3, 'dinning 4' ,'this is dinning 4' ,50000 ,'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(3, 'dinning 5' ,'this is dinning 5' ,60000 ,'https://images.unsplash.com/photo-1583845112239-97ef1341b271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(3, 'dinning 6' ,'this is dinning 6' ,70000 ,'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',1 ),
]
socums : Product[] =[
  new Product(5, 'socum 1' ,'this is socum 1' ,20000 ,'https://media.istockphoto.com/photos/abandoned-mattress-and-couch-picture-id492708118?b=1&k=20&m=492708118&s=170667a&w=0&h=3k2YV6y1zUtOAFGFZxRlk_UnL0WxVKVbWRGRmAnPuFM=',1 ),
  new Product(5, 'socum 2' ,'this is socum 2' ,40000 ,'https://media.istockphoto.com/photos/discarded-furniture-picture-id157685147?b=1&k=20&m=157685147&s=170667a&w=0&h=QW2iTonEJa-OI3tfe76CBpvZvn12iJ1soM0bEa1gf3M=',1 ),
  new Product(5, 'socum 3' ,'this is socum 3' ,30000 ,'https://media.istockphoto.com/photos/sofa-sofa-pink-old-sofa-dirty-isolated-on-white-background-picture-id1154610528?b=1&k=20&m=1154610528&s=170667a&w=0&h=WahIbSUc5zl9IHJwnPPkO7pB3C9bq2RHqIc7d1tnuJg=',1 ),
  new Product(5, 'socum 4' ,'this is socum 4' ,50000 ,'https://media.istockphoto.com/photos/stylish-scandi-compostion-at-living-room-interior-with-design-gray-picture-id1224198931?b=1&k=20&m=1224198931&s=170667a&w=0&h=_sYJ56K5F0lHdvQZ5VmZFHhSaw79JUDIEq1FeAriGGg=',1 ),
  new Product(5, 'socum 5' ,'this is socum 5' ,60000 ,'https://media.istockphoto.com/photos/loft-room-with-sofa-picture-id990273788?b=1&k=20&m=990273788&s=170667a&w=0&h=lhF_g9r-l3puRWbvOZvSJn3d3eTNCYZrpn35Nf492Nk=',1 ),
  new Product(5, 'socum 6' ,'this is socum 6' ,70000 ,'https://media.istockphoto.com/photos/portrait-of-a-15-year-old-pomchi-mix-dog-picture-id1394483843?k=20&m=1394483843&s=612x612&w=0&h=rvpgF1lrTlW7VR0TnCltVLU-pddS14Q2sCFvObMrnn4=',1 ),
]

tvs: Product[] =[
  new Product(4, 'Tv-Unit 1' ,'this is Tv-Unit 1' ,20000 ,'https://images.unsplash.com/photo-1580897275296-87979517bd4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHYlMjB1bml0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(4, 'Tv-Unit 2' ,'this is Tv-Unit 2' ,40000 ,'https://images.unsplash.com/photo-1611484655556-9a86a0cf109b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHYlMjB1bml0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(4, 'Tv-Unit 3' ,'this is Tv-Unit 3' ,30000 ,'https://images.unsplash.com/photo-1552975084-6e027cd345c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',1 ),
  new Product(4, 'Tv-Unit 4' ,'this is Tv-Unit 4' ,50000 ,'https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHR2JTIwdW5pdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(4, 'Tv-Unit 5' ,'this is Tv-Unit 5' ,60000 ,'https://images.unsplash.com/photo-1556022363-5187bfa13ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHR2JTIwdW5pdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(4, 'Tv-Unit 6' ,'this is Tv-Unit 6' ,70000 ,'https://images.unsplash.com/photo-1604011854873-76e939ef5a5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHYlMjB1bml0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',1 ),
]
books : Product[] =[
  new Product(6, 'Books 1' ,'this is Books 1' ,20000 ,'https://images.unsplash.com/photo-1593670755950-603e1d6184b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMHNoZWxmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(6, 'Books 2' ,'this is Books 2' ,40000 ,'https://images.unsplash.com/photo-1559133082-d15e8502d064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBzaGVsZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(6, 'Books 3' ,'this is Books 3' ,30000 ,'https://images.unsplash.com/photo-1543248939-4296e1fea89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMHNoZWxmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',1 ),
  new Product(6, 'Books 4' ,'this is Books 4' ,50000 ,'https://media.istockphoto.com/photos/stylish-modern-interior-of-contemporary-library-with-comfortable-picture-id1323485063?b=1&k=20&m=1323485063&s=170667a&w=0&h=2D4DAoYqzFyv45y5gGu6Ue92jKDq6CHFDeHwU4y5Ehw=',1 ),
  new Product(6, 'Books 5' ,'this is Books 5' ,60000 ,'https://media.istockphoto.com/photos/living-room-interior-have-cabinet-for-tv-and-leather-armchair-in-picture-id1329433253?b=1&k=20&m=1329433253&s=170667a&w=0&h=SHPiJKolqXtr02AD-vgrvbMfSAlgCfgxXMDw-jNFlo0=',1 ),
  new Product(6, 'Books 6' ,'this is Books 6' ,70000 ,'https://media.istockphoto.com/photos/home-office-interior-with-wooden-studying-desk-white-library-and-picture-id1325705708?b=1&k=20&m=1325705708&s=170667a&w=0&h=BJAU8TDSe_AfM2nkM0D4C1K1mtjjoT-ZkGkOD6PbI4U=',1 ),
]
allitems:any[]=[...this.products,...this.beds,...this.socums,...this.books,...this.tvs,...this.dinnings];
main1items: Main1Item[]=[
  new Main1Item(1,'Sofa-Set', 'assets/images/slider1.jpg','/products'),
  new Main1Item(2,'Beds','assets/images/bed.jpg', '/bed'),
  new Main1Item(3,'Dinning-Set','assets/images/dinning.jpg', '/dinning'),
  new Main1Item(4,'Tv-Units','assets/images/tv.jpg','/tv'),
  new Main1Item(5,'Sofa Cum Bed','assets/images/sofa.jpg', '/socum'),
  new Main1Item(6,'Bookshelves','assets/images/book.jpg','/book')
]
storeitems: Main1Item[]=[
  new Main1Item(1,'Bangalore', 'assets/images/city1.jpg','/city1'),
  new Main1Item(2,'Mumbai','assets/images/city2.jpg', '/city1'),
  new Main1Item(3,'Ahemdabad','assets/images/city3.jpg', '/city3'),
  new Main1Item(4,'Delhi','assets/images/city4.jpg','/city4'),
  new Main1Item(5,'Jaipur','assets/images/city5.jpg', '/city5'),
  new Main1Item(6,'Pune','assets/images/city6.jpg','/city6')
]
showitems:Review[]=[
  new Review(1, 'Wall Arts' ,'500+Options|From ₹ 300', 'assets/images/decor1.jpg'),
  new Review(2, 'Wall Clocks' ,'500+Options|From ₹  500', 'assets/images/decor2.jpg'),
  new Review(3, 'Mirros' ,'500+Options|From ₹  800', 'assets/images/decor3.jpg'),
  new Review(4, 'Candle Stand' ,'500+Options|From ₹  600', 'assets/images/decor4.jpg'),
  new Review(5, 'Table Showpeice' ,'500+Options|From ₹  900', 'assets/images/decor5.jpg'),
  new Review(6, 'Wall Sheleves' ,'500+Options|From ₹  800', 'assets/images/decor6.jpg'),
  new Review(7, 'Photo Frames' ,'500+Options|From ₹  400', 'assets/images/decor7.jpg'),
  new Review(8, 'Plantors' ,'500+Options|From ₹  1000', 'assets/images/decor8.jpg'),
  new Review(9, 'Key Holder' ,'500+Options|From ₹  200', 'assets/images/decor9.jpg'),
  new Review(10, 'Wooden Jharokhas' ,'500+Options|From ₹  1500', 'assets/images/decor10.jpg')

]
reviewItems:Mainreview[]=[
  new Mainreview(1,'Richa Gupta','Getting the wooden furniture online in India which perfectly blends.' ,'assets/images/bed.jpg' ,'Hyderabad',3),
  new Mainreview(2,'Rahul shrama' ,'Getting the wooden furniture online in India which perfectly blends.' ,'assets/images/sofa.jpg','Delhi',4),
  new Mainreview(3,'Ritu Verma' ,'Getting the wooden furniture online in India which perfectly blends.' ,'assets/images/dinning.jpg','Jaipur',5),
  new Mainreview(4,'Akshay Rawat' ,'Getting the wooden furniture online in India which perfectly blends.' ,'assets/images/book.jpg','Mumbai',3),
]
public search = new BehaviorSubject<string>("");
  constructor() { }
  getProducts():Product[]{
    return this.allitems
  }
  getBeds():Product[]{
    return this.beds
  }
  getDinnings():Product[]{
    return this.dinnings
  }
  getTVs():Product[]{
    return this.tvs
  }
  getSocums():Product[]{
    return this.socums
  }
  getBooks():Product[]{
    return this.books
  }
  getItems():Main1Item[]{
    return this.main1items
  }
  getStore():Main1Item[]{
    return this.storeitems
  }
  getShows():Review[]{
    return this.showitems
  }
  getReview():Mainreview[]{
    return this.reviewItems
  }
}

