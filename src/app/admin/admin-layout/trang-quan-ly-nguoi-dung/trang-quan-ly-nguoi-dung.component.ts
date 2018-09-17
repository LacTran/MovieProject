import { Component, OnInit } from '@angular/core';
import { TransformDataService } from '../../../services/transform-data.service';

@Component({
  selector: 'app-trang-quan-ly-nguoi-dung',
  templateUrl: './trang-quan-ly-nguoi-dung.component.html',
  styleUrls: ['./trang-quan-ly-nguoi-dung.component.css']
})
export class TrangQuanLyNguoiDungComponent implements OnInit {

  statusQLND:boolean=true;
  status:boolean = true;
  ToggleSidebar(){
    this.status = !this.status;
    this.transformSV.sidebarEmit.emit(this.status);
  }
  constructor(private transformSV:TransformDataService) { }

  ngOnInit() {
    this.transformSV.qlndEmit.subscribe(
      (kq:boolean) => {
        this.statusQLND = kq;
      }
    )
  }

}
