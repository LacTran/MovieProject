import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformDataService {
  @Output() sidebarEmit = new EventEmitter();
  @Output() qlndEmit = new EventEmitter();
  constructor() { }
}
