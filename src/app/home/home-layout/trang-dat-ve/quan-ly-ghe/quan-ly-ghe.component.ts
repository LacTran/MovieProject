import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-quan-ly-ghe',
  templateUrl: './quan-ly-ghe.component.html',
  styleUrls: ['./quan-ly-ghe.component.css']
})
export class QuanLyGheComponent implements OnInit {
  @ViewChild(DanhSachGheComponent) dsGheCom:DanhSachGheComponent;
  constructor() { }

  ThemGhe(soGhe:string,tenGhe:string,giaGhe:number){
    let Ghe ={
      SoGhe:soGhe,
      TenGhe:tenGhe,
      GiaGhe:giaGhe,
      TrangThai:false
    }
    this.dsGheCom.ThemGhe(Ghe);

  }

  ngOnInit() {
  }

}
