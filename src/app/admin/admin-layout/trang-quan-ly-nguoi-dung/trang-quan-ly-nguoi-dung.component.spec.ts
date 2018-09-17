import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangQuanLyNguoiDungComponent } from './trang-quan-ly-nguoi-dung.component';

describe('TrangQuanLyNguoiDungComponent', () => {
  let component: TrangQuanLyNguoiDungComponent;
  let fixture: ComponentFixture<TrangQuanLyNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangQuanLyNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangQuanLyNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
