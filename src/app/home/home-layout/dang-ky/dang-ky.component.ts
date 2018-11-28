import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { NguoiDungService } from '../../../services/nguoi-dung.service';
import { NguoiDung } from '../../../models/nguoidung.model';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  @ViewChild('formDangKy') formDK:NgForm;

  public DanhSachNguoiDung:Array<NguoiDung>=[];
  public Today = new Date();

  constructor(private NguoiDungSV:NguoiDungService) { }
  public DangKy(value) {
    value.MaNhom ='GP01';
    console.log(value);
    this.NguoiDungSV.DangKy(value).subscribe(
      (kq:any) => {
        console.log(kq);
        this.DanhSachNguoiDung.push(value);
      },
      (errors:any) =>{
       console.log(errors);
      }
    );
    // this.formDK.reset();
 
  }
  
  public CapNhat(){
    this.formDK.setValue({
      HoTen:"trần gia lạc",
      MatKhau:"132123ARE",
      TaiKhoan:"trangialac",
      Email:"trangialac@gmai.com",
      SoDT:"111111111",
      MaLoaiNguoiDung:"QuanTri"
    })
  }
  public Xoa(nguoiDung){
    
  }
  ngOnInit() {
    this.NguoiDungSV.LayDanhSachNguoiDung().subscribe(
      (kq:any) => {
        console.log(kq);
        for (let i in kq){
          this.DanhSachNguoiDung.push(kq[i]);
        }
        // this.DanhSachNguoiDung = kq;
      },
      (error:any) =>{
        console.log(error)
      }
    )
  }

}
