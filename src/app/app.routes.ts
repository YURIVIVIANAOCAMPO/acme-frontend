import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersLoginComponent } from './users-login/users-login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path:'usersLogin',component:UsersLoginComponent}
];
