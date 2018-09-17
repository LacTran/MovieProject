import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.css']
})
export class DanhSachGheComponent implements OnInit {
  //
  public SoGheDangDat:number =0;
  public SoGheConTrong:number= 0;
  //

  num:number = 1;
  @Input() demoChange:number


  public DSGheDangDat:any = [
  ];

  @Input() DanhSachGheNgoi:Array<{}> = [
  ];
  @Output() emitDSGheDangDat = new EventEmitter

  constructor() { }

  DatGheParent(status:boolean,ghe:any){
    console.log(ghe);
    var gheDangDat = {
      MaGhe: ghe.MaGhe,
      TenGhe: ghe.TenGhe,
      GiaVe: ghe.GiaVe
    }
    if(status){
      this.SoGheDangDat++;
      this.SoGheConTrong--;
      this.DSGheDangDat.push(gheDangDat);
    }
    else{
      this.SoGheDangDat--;
      this.SoGheConTrong++;
      for (let i in this.DSGheDangDat){
        if (this.DSGheDangDat[i].MaGhe == ghe.MaGhe){
          this.DSGheDangDat.splice(parseInt(i),1);
        }
      }
      console.log(this.DSGheDangDat);
    }
    // emit danh sách ghế đang đặt ra component cha: trangdatve component
    this.emitDSGheDangDat.emit(this.DSGheDangDat);
  }  

  ThemGhe(ghe:any){
    this.DanhSachGheNgoi.push(ghe);
  }

  ngOnInit() {
    this.SoGheConTrong = this.DanhSachGheNgoi.length;
  }

}
