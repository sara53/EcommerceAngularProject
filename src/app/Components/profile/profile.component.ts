import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser;
  isDataLoaded = false;

  constructor(private router:Router , private currentUserService: AccountService) { }

  ngOnInit(): void {
    let subscrription = this.currentUserService.GetCurrentUserInfo()
    .subscribe((data) => {
      this.currentUser = data;
      console.log(this.currentUser)
      this.isDataLoaded  = true;
    },
      (err) => {
         console.log(err.statusText);
         this.isDataLoaded  = false;
      })
      console.log(subscrription)
  }


  GoEdit(){
    this.router.navigateByUrl('/editProfile');
  }

}
