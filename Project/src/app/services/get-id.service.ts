import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIdService {

  constructor() { }
  AssociateId;
  setId(uid){
    this.AssociateId=uid;
  }
  getId(){
    return this.AssociateId;
  }
}
