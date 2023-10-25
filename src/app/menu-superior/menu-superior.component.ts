import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent {
  constructor (private router: Router){}

  @Input() showButtons: boolean = true;

  uploadPhoto() {
    this.router.navigate(['/upload']); // Reemplaza '/ruta' por la ruta a la que deseas redirigir
  }
}
