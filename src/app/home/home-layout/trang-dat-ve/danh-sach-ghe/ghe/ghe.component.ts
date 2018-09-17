import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  @Input() ItemGhe:any;
  @Output() eventDatGhe = new EventEmitter();
  public status:boolean = false;
  constructor() { }

  DatGhe(){
    this.status == false ? this.status = true: this.status = false; //or this.status = !this.status
    this.eventDatGhe.emit(this.status);
  }

  ngOnInit() {
  }

}
