import { Component, OnInit } from '@angular/core';
import { Phim } from '../../../models/phim.model';
import { PhimService } from '../../../services/phim.service';


@Component({
  selector: 'app-trang-quan-ly-phim',
  templateUrl: './trang-quan-ly-phim.component.html',
  styleUrls: ['./trang-quan-ly-phim.component.css']
})
export class TrangQuanLyPhimComponent implements OnInit {


  public ThemPhim(phim:Phim,fileAnh:any){
    phim.MaPhim ='';
    phim.HinhAnh= fileAnh[0].name;
    this._PhimService.ThemPhim(phim).subscribe(
      (kq:any) =>{
        this._PhimService.ThemAnh(fileAnh[0],phim.TenPhim).subscribe(
          (kq:any) => {
            console.log(kq);
          }
        )
      },
      (errors) => {
        console.log(errors);
      }
    )
    // console.log(phim);

  }

  
  constructor(private _PhimService:PhimService) {}

  ngOnInit() {
  }

}
