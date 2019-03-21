import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { NewComponent } from './tasks/new/new.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
        path: '',
        component: SiteLayoutComponent,
        children: [
          { path: 'login', component: LoginComponent},
          { path: 'register', component: RegisterComponent},
        ]
    },
    {
        path: 'app',
        component: AppLayoutComponent,
        children: [
          { path: 'tasks', component: TasksListComponent, canActivate: [AuthGuard] },
          { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
        ]
    },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
