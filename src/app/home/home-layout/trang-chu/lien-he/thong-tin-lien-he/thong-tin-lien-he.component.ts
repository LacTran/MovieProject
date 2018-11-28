import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
// import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-thong-tin-lien-he',
  templateUrl: './thong-tin-lien-he.component.html',
  styleUrls: ['./thong-tin-lien-he.component.css']
})
export class ThongTinLienHeComponent implements OnInit,AfterViewInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(10.7681365, 106.6709089),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  ngAfterViewInit(){
    

  }
}
