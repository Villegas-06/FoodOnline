import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';

import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin-home', component: AdminHomeComponent, canActivate: [authGuard] },
  { path: 'admin-list', component: AdminListComponent, canActivate: [authGuard] },
];
