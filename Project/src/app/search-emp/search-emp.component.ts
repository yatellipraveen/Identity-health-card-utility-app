import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { GetIdService } from '../services/get-id.service';

export interface Data {

  firstName:string,
  lastName:string,
  cardno:string,
  dob:string,
  eno:string,
  gender:string,
  policyno:string,
  uhid:string,

}

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent implements OnInit {

  searchText:string;
  data=[];
  articlesCollection: AngularFirestoreCollection<Data>;

  constructor(private firestore: AngularFirestore, public services : GetIdService) {
    this.articlesCollection = this.firestore.collection('associate');
    this.articlesCollection.get().forEach( doc=>{
      doc.docs.forEach( dat=>{
        this.data.push(dat.id);
      });
    });
   }

  ngOnInit() {
  }
  createHc(value){
    this.services.setId(value);
  }


}
