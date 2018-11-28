import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../../services/phim.service';

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.css']
})
export class TrangChiTietComponent implements OnInit {

  ChiTietPhim:any;
  MaPhim:string;
  constructor(private _activateRoute:ActivatedRoute, private _chiTietPhim:PhimService) { }
  ngOnInit() {

    this._activateRoute.params.subscribe(
      (kq:any) => {
        this.MaPhim = kq.maphim;
        this._chiTietPhim.LayChiTietPhim(this.MaPhim).subscribe(
          (kq:any) => {
            this.ChiTietPhim = kq;
            console.log(this.ChiTietPhim);

            // console.log(this.ChiTietPhim.LichChieu);
            
            let HinhNen = this.ChiTietPhim.HinhAnh;
            
            

            let mangTrailer = this.ChiTietPhim.Trailer.split('watch?v=');
            // console.log(mangTrailer);
            this.ChiTietPhim.Trailer = mangTrailer[0] + "embed/" + mangTrailer[1];
            // console.log(this.ChiTietPhim);
          },
            (errors:any) => {
              console.log(errors);
            }
          
        )
      }
    )

  }

}
