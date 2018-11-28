import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from '../../../services/nguoi-dung.service';
import { NguoiDung } from '../../../models/nguoidung.model';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { trigger,state,style, animate,transition, keyframes } from '@angular/animations';
// import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css'],
  // Animation
  animations:[
    // trigger('hieuUngDemo',[
    //   state('before',style({
    //     'background-color':'red',
    //   })),
    //   state('after',style({
    //     'background-color':'blue',
    //     transform: 'translateX(400px)'
    //   })),
    //   transition('* => *', animate(1000)),
      

    // ]),
    
    //FadeInDown form DangNhap
    trigger('FadeInDown',[
      state('showUP',style({
        opacity:"1",
        transform:"translateY(0)"
      })),
      transition('void => showUp',[
        style({opacity:"0",transform:"translateY(100px)"}),
        animate(1000, keyframes([
          style({opacity:0.5, transform:'translateY(0)', offset:0.4}),
          // style({opacity:0.8, transform:'translateY(-100px)', offset:0.7}),
          style({opacity:1, transform:'translateY(0)', offset:1})
        ]))
      ])
    ])

    //End FadeInDown form DangNhap

  ]
})
export class DangNhapComponent implements OnInit {

  //status hiệu ứng
  status:string = "showUp";
  onAnimate(){
    if(this.status =="before"){
      this.status ="after"
    }
    else{
      this.status = "before"
    }
  }
  constructor(private NguoiDungSV:NguoiDungService, private _router:Router, private _AuthService:AuthService,) { }

  localUser:string = '';
  
  public DangNhap(NguoiDung:{TaiKhoan:String,MatKhau:string}){
    console.log(NguoiDung);
    this.NguoiDungSV.DangNhap(NguoiDung.TaiKhoan,NguoiDung.MatKhau).subscribe(
      (kq:any) => {
        console.log(kq);
        if(typeof(kq) == "object"){
          localStorage.setItem('LocalUser',JSON.stringify(kq));
          this._AuthService.CheckLogin();
          
          // this._header.status = this._AuthService.isLogin;
          // this._header.userName = localStorage.getItem('LocalUser');
          // this.localUser = localStorage.getItem('LocalUser');
          
          setTimeout(() =>{
            this._router.navigate([''])
          },
            100)}
        else {
          alert('Tài khoản hoặc mật khẩu không đúng')
        }
      },
      (errors:any) =>{
        console.log(errors);
      }
    );
  }
  ngOnInit() {
  }

}
