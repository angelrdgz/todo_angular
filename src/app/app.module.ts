import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { NewComponent } from './tasks/new/new.component';
import { EditComponent } from './tasks/edit/edit.component';
import { ProfileComponent } from './profile/profile.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './_layouts/app-header/app-header.component';
import { AppContentComponent } from './_layouts/app-content/app-content.component';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import { ApiService } from './api.service';
import { GrdFilterPipe } from './grd-filter.pipe';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TasksListComponent,
    NewComponent,
    EditComponent,
    AppHeaderComponent,
    AppContentComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    ProfileComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [ApiService,AuthService,AuthGuard],
  bootstrap: [AppComponent],
  exports:[ EditComponent ]
})
export class AppModule { }
