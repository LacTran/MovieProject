import { Component, OnInit } from '@angular/core';
import { TransformDataService } from '../../../services/transform-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  status=true;
  ToggleQLND(){
    this.status=!this.status;
    this.transformSV.qlndEmit.emit(this.status);
  }

  statusSidebar:boolean = true;
  constructor(private transformSV:TransformDataService) { }

  ngOnInit() {
    this.transformSV.sidebarEmit.subscribe(
      (kq:boolean) => {
        this.statusSidebar = kq;
      }
    )
  }

}
