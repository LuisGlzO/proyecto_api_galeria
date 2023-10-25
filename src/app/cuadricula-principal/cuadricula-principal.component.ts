import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as Masonry from 'masonry-layout';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-cuadricula-principal',
  templateUrl: './cuadricula-principal.component.html',
  styleUrls: ['./cuadricula-principal.component.css']
})
export class CuadriculaPrincipalComponent implements AfterViewInit, OnInit{
  @ViewChild('masonryItem') masonryItem!: ElementRef;

  constructor(private postsService: PostsService) {}

  posts: any[] = [];
  page!: number;
  isLoading: boolean = true;
  loadingStates: any[] = [];

  getPokemonDetails() {
    this.postsService.getPosts()
    .then((data) => {
      this.posts = data;
      console.log(this.posts);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  ngOnInit(): void {
    //Estaba probando con una api pero ya puse las imágenes estáticas
    /*this.postsService.getPosts()
      .then((data: any) => { 
        this.posts = data.posts.map((post: any) => {
          // Concatenar la URL base a las URLs de las imágenes
          post.image = 'http://127.0.0.1:8000/' + post.image;
          return post;
        });
        console.log(this.posts);
        this.isLoading = true;
        this.loadingStates = new Array(this.posts.length).fill(true);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      var masonryItem = new Masonry( document.querySelector('#masonryItem')!, {
        // options
        itemSelector: '.grid-item',
        columnWidth: '33%',
        
      });*/
      this.posts = [
        {
          title: 'California',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/California.jpg'
        },
        {
          title: 'ChicaM1',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/ChicaM1.jpg'
        },
        {
          title: 'ChicaM2',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/ChicaM2.jpg'
        },
        {
          title: 'ChicaM3',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/ChicaM3.jpg'
        },
        {
          title: 'ChicaM4',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/ChicaM4.jpg'
        },
        {
          title: 'Flores_manianitas',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/Flores_manianitas.jpeg'
        },
        {
          title: 'Genshin1',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/Genshin1.jpg'
        },
        {
          title: 'Genshin2',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/Genshin2.png'
        },
        {
          title: 'Genshin3',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/Genshin3.jpg'
        },
        {
          title: 'New_York',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/New_York.jpg'
        },
        {
          title: 'Playa',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/Playa.jpg'
        },
        {
          title: 'PlayaAtardecer',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/PlayaAtardecer.jpg'
        },
        {
          title: 'REM',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/rem.jpg'
        },
        {
          title: 'Suiza',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/Suiza.jpg'
        },
        {
          title: 'Tracer_Horizontal',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/Tracer_Horizontal.jpg'
        },
        {
          title: 'Tracer_vertical',
          description: 'Esta es la descripción',
          image: '../../../assets/Imagenes_demo/Tracer_vertical.jpg'
        }
      ]

      this.loadingStates = new Array(this.posts.length).fill(true);
  }

  ngAfterViewInit(): void {
    //Olviden esta basura
    /*if (this.masonryItem) {
      const masonry = new Masonry(this.masonryItem.nativeElement, {
        //itemSelector: '.col-lg-4',
        columnWidth: '33.3%',
        gutter: 30,
        fitWidth: true  // Configurar isFitWidth para ajustar elementos horizontalmente
      });
      masonry.layout?.();
    }*/
  }

  imageLoaded(index: number) {
    this.loadingStates[index] = false;
  }
}
