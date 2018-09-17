import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.css']
})
export class DanhSachPhimComponent implements OnInit{
  public Status:boolean = true;
  constructor() { }
  HienThiPhimDangChieu(){
    this.Status=true;
  }
  HienThiPhimSapChieu(){
    this.Status=false;
  }

  ngOnInit() {
  }

}
