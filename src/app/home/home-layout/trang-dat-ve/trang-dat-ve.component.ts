import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhimService } from '../../../services/phim.service';
import { DatVeService } from '../../../services/dat-ve.service';

@Component({
  selector: 'app-trang-dat-ve',
  templateUrl: './trang-dat-ve.component.html',
  styleUrls: ['./trang-dat-ve.component.css']
})
export class TrangDatVeComponent implements OnInit {



  //demo change

  num:number = 1;
  ChangeNum(){
    this.num =5;
  }


  MaLichChieu:string;
  ChiTietPhongVe:any;
  DanhSachGheDangDat:Array<{MaGhe:string,TenGhe:string,GiaVe:number}>;

  constructor(private _activateRoute:ActivatedRoute, private _datVeSV:DatVeService,private _router:Router) { }
  DatGhe(){
    let currentUser = JSON.parse(localStorage.getItem('LocalUser'));
    if (currentUser != null){
      let ve = {
        MaLichChieu: this.MaLichChieu,
        TaiKhoanNguoiDung:currentUser.TaiKhoai,
        DanhSachVe: this.DanhSachGheDangDat
      }
        this._datVeSV.DatGhe(ve).subscribe(
          (kq:any) => {
            console.log(kq);
          },
          (errors) =>{
            console.log(errors);
          }
      
        )
      }
      else {
        alert('Vui lòng đăng nhập');
        this._router.navigate(['/dangnhap']);
      }
    

  }
  LayDanhSachGheDangDat(value){
    this.DanhSachGheDangDat = value;
  }

  ngOnChange(){
    console.log('changed')
  }

  ngOnInit() {
    this._activateRoute.params.subscribe(
      (kq:any) => {
        this.MaLichChieu = kq.malichchieu;
        let mangLichChieu = this._datVeSV.LayChiTietPhongVe(this.MaLichChieu).subscribe(
          (kq:any) => {
            console.log(kq);
            this.ChiTietPhongVe = kq;
          },
          (errors) => {
            console.log(errors);
          }
        )
        console.log(mangLichChieu);
      }
    )

  }

}
