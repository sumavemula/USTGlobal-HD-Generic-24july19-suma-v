import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private firebaseService : FirebaseService,
    private router: Router) { }
  updateUser(user){
     this.firebaseService.selectedUser=user;
    this.router.navigateByUrl('/firebase');
  }
  deleteUser(user){
    this.firebaseService.deleteData(user).subscribe(resData =>{
      console.log(resData);
      this.firebaseService.getData();
    })
  }

  ngOnInit() {
    this.firebaseService.getData();
    
  }

}
