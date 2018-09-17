import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterOutlet} from '@angular/router';
import { HomeLayoutComponent } from '../home/home-layout/home-layout.component';
import { AdminLayoutComponent } from '../admin/admin-layout/admin-layout.component';
import { TrangChiTietComponent } from '../home/home-layout/trang-chi-tiet/trang-chi-tiet.component';
import { DangNhapComponent } from '../home/home-layout/dang-nhap/dang-nhap.component';
import { DangKyComponent } from '../home/home-layout/dang-ky/dang-ky.component';
import { DashboardComponent } from '../admin/admin-layout/dashboard/dashboard.component';
import { TrangQuanLyNguoiDungComponent } from '../admin/admin-layout/trang-quan-ly-nguoi-dung/trang-quan-ly-nguoi-dung.component';
import { TrangQuanLyPhimComponent } from '../admin/admin-layout/trang-quan-ly-phim/trang-quan-ly-phim.component';
import { TrangChuComponent } from '../home/home-layout/trang-chu/trang-chu.component';
import { TrangDatVeComponent } from '../home/home-layout/trang-dat-ve/trang-dat-ve.component';
import { GuardDatVeService } from '../services/guard-dat-ve.service';
import { AuthAdminService } from '../services/auth-admin.service';

const routes: Routes = [
  {path:'', component:HomeLayoutComponent,children:[
    {path:'',component:TrangChuComponent},
    {path:'chitiet/:maphim', component:TrangChiTietComponent},
    {path:'dangnhap',component:DangNhapComponent},
    {path:'dangky',component:DangKyComponent},
    {path:'datve/:malichchieu',canActivate:[GuardDatVeService],component:TrangDatVeComponent}
  ]},
  {path:'admin',canActivate:[AuthAdminService], component:AdminLayoutComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'nguoidung',component:TrangQuanLyNguoiDungComponent},
    {path:'phim',component:TrangQuanLyPhimComponent}
  ]},
  {path:'**',redirectTo:'', pathMatch:'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
})
export class AppRoutingModule { }
