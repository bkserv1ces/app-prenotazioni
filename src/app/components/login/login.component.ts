import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from '../../servizi/login.service';
import { AppUsers } from '../../modelli/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  userFormGroup!: FormGroup;
  loading = false;
  submitted = false;
  errorMessage : any;

  constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private logService: LoginService
  ) { }

  ngOnInit() {
      this.userFormGroup = this.fb.group({
          username: this.fb.control(""),
          password: this.fb.control("")
      });
  }

  handleLogin() {
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;
  
    this.logService.login(username, password).subscribe({
      next : (appUser : AppUsers) => {
        this.logService.authenticateUser(appUser).subscribe({
          next : (data) => {
            this.router.navigateByUrl("");
          }
        })
      },
      error : (err)=>{
        this.errorMessage = err;
      }
    })
  }

  get f() { return this.userFormGroup.controls; }

  onSubmit() {
    console.log("Submit OK!");
  }
}
