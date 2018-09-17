import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-tin-tuc',
  templateUrl: './danh-sach-tin-tuc.component.html',
  styleUrls: ['./danh-sach-tin-tuc.component.css']
})
export class DanhSachTinTucComponent implements OnInit {
  public Chon:number=1;
  constructor() { }

  ngOnInit() {
  }
  HienThiDienAnh(){
    this.Chon=1;
  }
  HienThiKhuyenMai(){
    this.Chon=2;
  }
  HienThiReview(){
    this.Chon=3;
  }

}
