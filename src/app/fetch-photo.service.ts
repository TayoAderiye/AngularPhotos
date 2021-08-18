import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface UnsplashResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {

  constructor(private http: HttpClient) { }

  getPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID v8v6-fE5bVTA29fq7057BiDK-C3iovepbMOYl8Fh37g'
      }
    })
  }

}
