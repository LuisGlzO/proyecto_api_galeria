import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'http://127.0.0.1:8000/';

  constructor() { }

  getPosts(): Promise<any>{
    const url = `${this.apiUrl}api/posts`;
    return axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
  }
}
