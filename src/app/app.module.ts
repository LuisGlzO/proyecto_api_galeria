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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuSuperiorComponent,
    CuadriculaPrincipalComponent,
    NotfoundComponent,
    UploadPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
