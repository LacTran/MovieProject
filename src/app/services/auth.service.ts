import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin:boolean = false;
  isAdmin:boolean = false
  localUser = JSON.parse(localStorage.getItem('LocalUser'));
  constructor() { }
  CheckLogin(){
    // let localUser = JSON.parse(localStorage.getItem('LocalUser'));
    if(this.localUser  != null){
      this.isLogin = true;
      console.log(this.isLogin);
      console.log(this.localUser.HoTen);
      
      
    
      }
    else{
      this.isLogin = false;
    }
  }
  CheckAdmin(){
    // let localUser = JSON.parse(localStorage.getItem('LocalUser'));
    if (this.localUser != null && this.localUser.MaLoaiND =='QuanTri'){
      this.isAdmin = true;
    }
    else{
      this.isAdmin = false;
    }
  }
  
}
