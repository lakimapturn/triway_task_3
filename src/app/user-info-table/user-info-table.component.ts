import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-info-table',
  templateUrl: './user-info-table.component.html',
  styleUrls: ['./user-info-table.component.css'],
  providers: [UserDataService]
})
export class UserInfoTableComponent implements OnInit {
  tableValues: Array<Object> = [];
  
  constructor(private userDService: UserDataService) {
    this.tableValues = userDService.getAllUserInfo();
  }

  ngOnInit(): void {

  }

}
