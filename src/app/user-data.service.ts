import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  infoTable: Array<Object> = [];
  //private infoTable: BehaviorSubject<Array<Object>> = new BehaviorSubject<Array<Object>>([]);
  public readonly 
  
  constructor() {
    console.log(localStorage.getItem('userInfo'));
  }

  getAllUserInfo() {
    return this.infoTable
  }

  getUserInfo(id) {
    return this.infoTable[id];
  }

  addUserInfo(info) {
    this.infoTable.push(info);
    localStorage.setItem("userInfo", JSON.stringify(this.infoTable))
  }
}
