import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http,Response, Headers} from '@angular/http';
import { map} from 'rxjs/operators';
import { NguoiDung } from '../models/nguoidung.model';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {


  public LayDanhSachNguoiDung():Observable<any>{
    // let apiLayDSND=`http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    let apiLayDSND=`https://tintuc03-e122e.firebaseio.com/data.json`;
    let obServe = this._http.get(apiLayDSND).pipe(
      map((result:Response) => result.json())
    );
    return obServe;
  }

  public DangKy(nguoiDung:NguoiDung): Observable<any>{
    // let apiDangKy =`http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    // let apiDangKy =`https://tintuc03-e122e.firebaseio.com`;
    let apiDangKy =`https://tintuc03-e122e.firebaseio.com/data.json`;
    
    // let headerDK = new Headers();
    // headerDK.append('Content-Type','application/json;charset=UTF-8');
    let obServe =this._http.post(apiDangKy,nguoiDung).pipe(
      map((result:Response) => result.json())
    );
    return obServe;

  }


  public DangNhap(taiKhoan,matKhau): Observable<any>{
    // let apiDangNhap = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=darkness&matkhau=123`;
    let apiDangNhap = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    let headerDN= new Headers();
    let obServe = this._http.post(apiDangNhap,{headers:headerDN}).pipe(
      map((result:Response) => result.json())
    );
    return obServe;

  }

  // Firebase attempt
  // public DangNhap(taiKhoan,matKhau): Observable<any>{
  //   let apiDangNhap = `https://tintuc03-e122e.firebaseio.com/data.json`;
  //   let headerDN= new Headers();
  //   let obServe = this._http.post(apiDangNhap,{headers:headerDN}).pipe(
  //     map((result:Response) => result.json())
  //   );
  //   return obServe;

  // }

  constructor(private _http:Http) { }
}
