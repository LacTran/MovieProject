import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardDatVeService implements CanActivate {

  canActivate(){
    this._AuthService.CheckLogin();
    if (this._AuthService.isLogin){
      return true;
    }
    else{
      alert('Vui lòng đăng nhập để đặt vé');
      this._Router.navigate(['/dangnhap']);
    }
  }

  constructor(private _AuthService:AuthService, private _Router:Router) { }
}
