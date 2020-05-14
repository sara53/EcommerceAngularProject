import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { AccountService } from 'src/app/Services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  constructor(private accService: AccountService,
    private route: ActivatedRoute
    , private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  })
  login() {
    if (this.loginForm.valid) {
      let user = {
        UserName: this.loginForm.controls.UserName.value,
        Password: this.loginForm.controls.Password.value
      }
      this.accService.login(user)
        .subscribe(result => {
          if (result) {
            var isAdmin = this.accService.IsAdmin();
            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            if (isAdmin) {
              this.router.navigate([returnUrl || '/admin']);
            }
            else

              this.router.navigate([returnUrl || '/product']);
          }
        }
          , (err) => {
            console.log("No Error IN login")
            this.invalidLogin = true;
          })
    }
  }

  NavToRegisteration() {
    console.log("d")
    this.router.navigate(['/Registration']);
  }

  // login(user) {
  //   console.log(user)
  //   this.accService.login(user)
  //     .subscribe(result => {
  //       if (result) {
  //         console.log("login")
  //         this.router.navigate(['/profile']);
  //       }
  //     }, (err) => {
  //       console.log("noo error from login")
  //       this.invalidLogin = true;
  //     })
  // }

  show(a) {
    var x = $("#" + a)
    if (x.attr('type') == "password") {
      x.attr('type', 'text');
      $("#" + "displayedIcon").attr('class', 'fas fa-eye field-icon');
    } else {
      x.attr('type', 'password');
      $("#" + "displayedIcon").attr('class', 'fas fa-eye-slash field-icon');
    }
  }
}
