import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { UserInfoTableComponent } from '../user-info-table/user-info-table.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})

export class UserFormComponent implements OnInit {
  fullname_error: string = '';
  app_id_error: string = '';
  valid_period_error: string = '';
  active_error: boolean = true;
  enteredValues: Object = {};
  user_form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userDService: UserDataService) {
    this.user_form = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone_number: ['', Validators.required],
      send_email: [false],
      email: ['', Validators.required],
      address: [''],
      contacts: [''],
      valid_period: ['', Validators.required],
      app_id: ['', Validators.required],
      capacity: ['', Validators.required],
      postscript: [''],
      authorization: [false],
    })
  }

  ngOnInit() {
    this.userDService.formValues.subscribe(editFormValues => {this.edit(editFormValues)});
  }
  
  checkDate(inputDate)
  {
    let today = new Date();
    let current_dd = today.getDate();
    let current_mm = today.getMonth() + 1;
    let current_yyyy = today.getFullYear();
    let enteredDate = new Date(inputDate);
    let entered_dd = enteredDate.getDate();
    let entered_mm = enteredDate.getMonth() + 1;
    let entered_yyyy = enteredDate.getFullYear();
    return (entered_yyyy >= current_yyyy && entered_mm >= current_mm && entered_dd >= current_dd)
  }

  change(value: any) {
    this.user_form
  }

  edit(formValues)
  {
    console.log(formValues)
    this.user_form.setValue({
      fullname: formValues.fullname?formValues.fullname:'',
      username: formValues.username?formValues.username:'',
      password: formValues.password?formValues.password:'',
      phone_number: formValues.phone_number?formValues.phone_number:'',
      send_email: formValues.send_email?formValues.send_email:false,
      email: formValues.email?formValues.email:'',
      address: formValues.address?formValues.address:'',
      contacts: formValues.contacts?formValues.address:'',
      valid_period: formValues.valid_period?formValues.valid_period: '',
      app_id: formValues.app_id?formValues.app_id: '',
      capacity: formValues.capacity?formValues.capacity: '',
      postscript: formValues.postscript?formValues.postscript:'',
      authorization: formValues.background?formValues.background:false,
    });
  }

  cancel()
  {
    this.user_form.reset();
  }

  submit()
  {
    if(this.user_form.valid)
    {
      this.userDService.addUserInfo(this.user_form.value);
      this.active_error = true;
      console.log(this.user_form);
      this.user_form.reset();
    }
  }
}
