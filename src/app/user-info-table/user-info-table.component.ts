import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserDataService, UserInfo } from '../user-data.service';

@Component({
  selector: 'app-user-info-table',
  templateUrl: './user-info-table.component.html',
  styleUrls: ['./user-info-table.component.css'],
})
export class UserInfoTableComponent implements OnInit, OnChanges {
  tableValues: UserInfo[];
  subscription: Subscription;

  constructor(private userDService: UserDataService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.userDService.userData.subscribe(tableValues => this.tableValues = tableValues)
  }

  ngOnInit(){
    this.subscription = this.userDService.userData.subscribe(tableValues => this.tableValues = tableValues)
    console.log(this.tableValues);
  }
}
