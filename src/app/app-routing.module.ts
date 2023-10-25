import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CuadriculaPrincipalComponent } from './cuadricula-principal/cuadricula-principal.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'inicio', component: CuadriculaPrincipalComponent},
  {path:'upload', component: UploadPhotoComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
