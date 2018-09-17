import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangQuanLyPhimComponent } from './trang-quan-ly-phim.component';

describe('TrangQuanLyPhimComponent', () => {
  let component: TrangQuanLyPhimComponent;
  let fixture: ComponentFixture<TrangQuanLyPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangQuanLyPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangQuanLyPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
