import { Injectable } from '@angular/core';
import { Http,Response, Headers } from '@angular/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatVeService {


  public LayChiTietPhongVe(maLichChieu:string):Observable<any>{
    let apiChiTietPhongVe=`http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    let obServe = this._http.get(apiChiTietPhongVe).pipe(
      map((result:Response) => result.json())
    );
    return obServe;
  }
  DatGhe(ve:any):Observable<any>{
    let apiDatGhe=`http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`
    let headerDatGhe = new Headers();
    headerDatGhe.append('Content-type','application/json;charset-utf-8');
    let obServe = this._http.post(apiDatGhe,ve,{headers:headerDatGhe}).pipe(
      map((result:Response) => result.json())
    );
    return obServe;
  }
  constructor(private _http:Http) { }
}
