import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { UserInfoTableComponent } from '../user-info-table/user-info-table.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})

export class UserFormComponent {
  fullname_error: string = '';
  app_id_error: string = '';
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
      capacity: [0, Validators.required],
      postscript: [''],
      authorization: [false],
    })
  }

  resetForm(login: any)
  {
    login.resetForm()
  }

  submit(login: any) {
    if(this.active_error === false)
    {

      this.userDService.addUserInfo(login.value);
      //this.userInfo.
      this.resetForm(login);
    }
  }

  onChange(value: any, login: any) {
    //checking if the fullname input field has been changed and if its has passed basic validity
    if(value.name === "fullname") { 
      if(value.valid){
        for(let i = 0; i<value.viewModel.length; i++)
        {
          if((/[a-zA-Z]/).test(value.viewModel.charAt(i)) == false && value.viewModel.charAt(i) != ' ')
          {
            this.fullname_error = "Full name must have only characters"
          } 
          else this.fullname_error = '';
        }
      }
      else this.fullname_error = '';
    }
    else if(value.name === "app_id") {
      for(let i = 0; i<value.viewModel.length; i++)
      {
        if((/[a-zA-Z0-9]/).test(value.viewModel.charAt(i)) == false)
        {
          this.app_id_error = "App ID can only have numbers or characters";
          return
        }
        else
          this.app_id_error = '';
      }
    }
    if(login.invalid == true)
      this.active_error = true;
    else if (this.fullname_error != '' && this.app_id_error != '')
      this.active_error = true;
    else this.active_error = false;
  }
}
