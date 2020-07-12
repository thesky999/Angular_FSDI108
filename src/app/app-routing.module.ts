import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { TempConverterComponent } from './component/temp-converter/temp-converter.component';

// Valid URLs for the system
const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'converter', component: TempConverterComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/list', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
