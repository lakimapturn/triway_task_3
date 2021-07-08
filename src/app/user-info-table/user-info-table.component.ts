import { Component, OnInit } from '@angular/core';
import { UserDataService, UserInfo } from '../user-data.service';

@Component({
  selector: 'app-user-info-table',
  templateUrl: './user-info-table.component.html',
  styleUrls: ['./user-info-table.component.css'],
})
export class UserInfoTableComponent implements OnInit {
  tableValues: UserInfo[];

  constructor(private userDService: UserDataService) {
    this.tableValues = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):[];
  }

  ngOnInit(){
    this.userDService.userData.subscribe(tableValues => tableValues[0]?(this.tableValues.push(tableValues[tableValues.length-1])):this.tableValues);
  }
}
