import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService implements CanActivate {

  canActivate(){
    this._AuthService.CheckAdmin();
    if (this._AuthService.isAdmin){
      return true;
    }
    else{
      this._Router.navigate(['/']);
    }
    
  }
  

  constructor(private _AuthService:AuthService, private _Router:Router) { }


}
