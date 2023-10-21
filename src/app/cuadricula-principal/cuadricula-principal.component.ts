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


  // Aqui debe ir la lógica para obtener los posts desde la api
  posts: any[] = [];
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
    this.postsService.getPosts()
      .then((data: any) => {  // Aquí estamos especificando que data es de tipo 'any'
        this.posts = data.posts.map((post: any) => {  // También estamos especificando que post es de tipo 'any'
          // Concatenar la URL base a las URLs de las imágenes
          post.image = 'http://127.0.0.1:8000/' + post.image;
          return post;
        });
        console.log(this.posts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      var masonryItem = new Masonry( document.querySelector('#masonryItem')!, {
        // options
        itemSelector: '.grid-item',
        columnWidth: '33%',
        
      });
  }

  ngAfterViewInit(): void {
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
}
