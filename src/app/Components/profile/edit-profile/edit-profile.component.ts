import { Component, OnInit } from '@angular/core';
import {EditProfileService} from 'src/app/Services/edit-profile.service'
import {AccountService} from 'src/app/Services/account.service'
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

 userName;
 email
 password;

 UserId;
  constructor(private myServices:EditProfileService, private AccServices:AccountService) { }

  ngOnInit(): void {


  this.AccServices.GetCurrentUserInfo().subscribe((currentuser)=>{
    this.UserId = currentuser["id"];
    console.log(currentuser["id"]);
    console.log(this.UserId );

  });
  

  }

  saveChanges(){
   let user = {
     id:this.UserId,
     UserName:this.userName,
     Email:this.email//,
     //PasswordHash:this.password
   }

   console.log(user);



  let subscrription = this.myServices.EditUser(this.UserId,user)
  .subscribe((data) => {
    console.log("Inside Subscribe");
    console.log(data)
 
  },
    (err) => {
      console.log("Error");
       console.log(err);
    })

  console.log("Out"); 
  }

}
