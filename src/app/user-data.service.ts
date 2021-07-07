import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  private userDataSource = new BehaviorSubject<UserInfo[]>([]);
  userData = this.userDataSource.asObservable();
  
  constructor() {
    console.log(localStorage.getItem('userInfo'));
  }

  getAllUserInfo() {
    return this.userDataSource
  }

  getUserInfo(id) {
    return this.userDataSource[id];
  }

  addUserInfo(info: UserInfo) {
    const arr = [];
    arr.push(info)
    console.log(arr);

    this.userDataSource.next(arr);
    console.log(this.userDataSource)
    localStorage.setItem("userInfo", JSON.stringify(arr))
  }
}

export class UserInfo {
  fullname: string;
  username: string;
  password: string;
  phone_number: string;
  send_email: boolean;
  email: string;
  address: string;
  contacts: number;
  valid_period: string;
  app_id: string;
  capacity: number;
  postscript: string;
  background: boolean;
}