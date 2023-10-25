import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { CuadriculaPrincipalComponent } from './cuadricula-principal/cuadricula-principal.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuSuperiorComponent,
    CuadriculaPrincipalComponent,
    NotfoundComponent,
    UploadPhotoComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
