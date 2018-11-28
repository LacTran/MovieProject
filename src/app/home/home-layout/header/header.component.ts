import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DangNhapComponent } from '../dang-nhap/dang-nhap.component';

// import $ from 'jquery';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _AuthService: AuthService) {
  }

  status = this._AuthService.isLogin;
  userName = this._AuthService.localUser.HoTen;





  ngOnInit() {
    $('header').scrollspy({ target: '.header__menu' });
  }


}
