import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule} from '@angular/forms';

import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './home-layout/header/header.component';
import { TrangChiTietComponent } from './home-layout/trang-chi-tiet/trang-chi-tiet.component';
import { TrangChuComponent } from './home-layout/trang-chu/trang-chu.component';
import { TrangDatVeComponent } from './home-layout/trang-dat-ve/trang-dat-ve.component';
import { DanhSachPhimComponent } from './home-layout/trang-chu/danh-sach-phim/danh-sach-phim.component';
import { DanhSachTinTucComponent } from './home-layout/trang-chu/danh-sach-tin-tuc/danh-sach-tin-tuc.component';
import { LienHeComponent } from './home-layout/trang-chu/lien-he/lien-he.component';
import { SliderComponent } from './home-layout/trang-chu/slider/slider.component';
import { PhimDangChieuComponent } from './home-layout/trang-chu/danh-sach-phim/phim-dang-chieu/phim-dang-chieu.component';
import { PhimItemComponent } from './home-layout/trang-chu/danh-sach-phim/phim-item/phim-item.component';
import { PhimSapChieuComponent } from './home-layout/trang-chu/danh-sach-phim/phim-sap-chieu/phim-sap-chieu.component';
import { DienAnhComponent } from './home-layout/trang-chu/danh-sach-tin-tuc/dien-anh/dien-anh.component';
import { ItemTinTucComponent } from './home-layout/trang-chu/danh-sach-tin-tuc/item-tin-tuc/item-tin-tuc.component';
import { KhuyenMaiComponent } from './home-layout/trang-chu/danh-sach-tin-tuc/khuyen-mai/khuyen-mai.component';
import { ReviewComponent } from './home-layout/trang-chu/danh-sach-tin-tuc/review/review.component';
import { FormLienHeComponent } from './home-layout/trang-chu/lien-he/form-lien-he/form-lien-he.component';
import { ThongTinLienHeComponent } from './home-layout/trang-chu/lien-he/thong-tin-lien-he/thong-tin-lien-he.component';
import { DanhSachGheComponent } from './home-layout/trang-dat-ve/danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './home-layout/trang-dat-ve/danh-sach-ghe/ghe/ghe.component';
import { QuanLyGheComponent } from './home-layout/trang-dat-ve/quan-ly-ghe/quan-ly-ghe.component';
import { DangKyComponent } from './home-layout/dang-ky/dang-ky.component';
import { DangNhapComponent } from './home-layout/dang-nhap/dang-nhap.component';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../pipe/pipe/pipe.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PipeModule,
    BrowserAnimationsModule
  ],
  declarations: [HomeLayoutComponent, 
    HeaderComponent, 
    TrangChiTietComponent, 
    TrangChuComponent, 
    TrangDatVeComponent, 
    DanhSachPhimComponent, 
    DanhSachTinTucComponent, 
    LienHeComponent, 
    SliderComponent, 
    PhimDangChieuComponent, 
    PhimItemComponent, 
    PhimSapChieuComponent, 
    DienAnhComponent, 
    ItemTinTucComponent, 
    KhuyenMaiComponent, 
    ReviewComponent, 
    FormLienHeComponent, 
    ThongTinLienHeComponent, 
    DanhSachGheComponent,
    GheComponent,
    QuanLyGheComponent,
    DangKyComponent,
    DangNhapComponent],

  exports:[
    HomeLayoutComponent, 
    HeaderComponent, 
    TrangChiTietComponent, 
    TrangChuComponent, 
    TrangDatVeComponent, 
    DanhSachPhimComponent, 
    DanhSachTinTucComponent, 
    LienHeComponent, 
    SliderComponent, 
    PhimDangChieuComponent, 
    PhimItemComponent, 
    PhimSapChieuComponent, 
    DienAnhComponent, 
    ItemTinTucComponent, 
    KhuyenMaiComponent, 
    ReviewComponent, 
    FormLienHeComponent, 
    ThongTinLienHeComponent,
    DanhSachGheComponent,
    GheComponent,
    QuanLyGheComponent,
    DangKyComponent,
    DangNhapComponent]
})
export class HomeModule { }

