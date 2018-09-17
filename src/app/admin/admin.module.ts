import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './admin-layout/dashboard/dashboard.component';
import { TrangQuanLyNguoiDungComponent } from './admin-layout/trang-quan-ly-nguoi-dung/trang-quan-ly-nguoi-dung.component';
import { TrangQuanLyPhimComponent } from './admin-layout/trang-quan-ly-phim/trang-quan-ly-phim.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    AdminLayoutComponent, 
    DashboardComponent, 
    TrangQuanLyNguoiDungComponent, 
    TrangQuanLyPhimComponent, 
    SidebarComponent],
  exports: [    
    AdminLayoutComponent, 
    DashboardComponent, 
    TrangQuanLyNguoiDungComponent, 
    TrangQuanLyPhimComponent, 
    SidebarComponent]
})

export class AdminModule { }
