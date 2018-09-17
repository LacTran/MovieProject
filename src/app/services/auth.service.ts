import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin:boolean = false;
  isAdmin:boolean = false
  constructor() { }
  CheckLogin(){
    let localUser = JSON.parse(localStorage.getItem('LocalUser'));
    if(localUser  != null){
      this.isLogin = true;

      
    
      }
    else{
      this.isLogin = false;
    }
  }
  CheckAdmin(){
    let localUser = JSON.parse(localStorage.getItem('LocalUser'));
    if (localUser != null && localUser.MaLoaiND =='QuanTri'){
      this.isAdmin = true;
    }
    else{
      this.isAdmin = false;
    }
  }
  
}
