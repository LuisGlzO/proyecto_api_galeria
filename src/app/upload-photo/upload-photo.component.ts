import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {

  openFileExplorer() {
    document.getElementById('fileInput')?.click();
  }

  chosenFile(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      // Hacer algo con el archivo seleccionado, como subirlo o mostrarlo.
      console.log('Archivo seleccionado:', archivo);
    }
  }

}
