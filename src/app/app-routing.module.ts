import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CuadriculaPrincipalComponent } from './cuadricula-principal/cuadricula-principal.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'inicio', component: CuadriculaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
