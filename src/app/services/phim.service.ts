import { Injectable } from '@angular/core';
import { Http,Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Phim } from '../models/phim.model';

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  public LayDanhSachPhim():Observable<any>{
    let apiLayDSP=`http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP01`;
    let obServe= this._http.get(apiLayDSP).pipe(
      map((result:Response) => result.json())
    );
    return obServe;
  }
  public LayChiTietPhim(maPhim:string):Observable<any>{
    let apiLayCTP=`http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let obServe = this._http.get(apiLayCTP).pipe(
      map((result:Response) => result.json())
    );
    return obServe;
  }
  public ThemPhim(phim:Phim):Observable<any>{
    let apiThemPhim=`http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    let header = new Headers();
    header.append('Content-type','application/json;charset-utf-8');
    let obServe = this._http.post(apiThemPhim,phim,{headers:header}).pipe(
      map((kq:Response) => kq.json())
    );
    return obServe;
  }
  public ThemAnh(fileAnh,TenPhim):Observable<any>{
    let apiThemAnh =`http://sv2.myclass.vn/api/QuanLyPhim/UploadFile`;
    var formData = new FormData();
    formData.append("Files",fileAnh);
    formData.append("TenPhim",TenPhim);
    let obServe = this._http.post(apiThemAnh,formData).pipe(
      map((kq:Response) => kq.json())
    );
    return obServe;

  }



  constructor(private _http:Http) { }
}
