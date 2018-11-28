import { Component, OnInit, AfterViewInit } from '@angular/core';

//Use Jquery
declare var $: any;
declare var swal: any;
import { PhimService } from '../../../../../services/phim.service';
import { Phim } from '../../../../../models/phim.model';



@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit {

    DanhSachPhimDangChieu:Array<Phim> =[]
    

  //lifecycle hook of component
  constructor(private _phim:PhimService) { }
  ngAfterViewInit() {
  }

  ngOnInit() {
    this._phim.LayDanhSachPhim().subscribe(
        (kq:any) => {
            this.DanhSachPhimDangChieu = kq;
            setTimeout(()=> {
                $('.carousel-dang-chieu').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
                }),100
            })
        },
        (error:any) => {
            console.log(error);
        }
    )
  }


}
