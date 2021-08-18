import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';



@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photoUrl!: string;

  constructor(private photosService: FetchPhotoService) {
    this.fetchPhoto()
   }

  ngOnInit(): void {
  }

  onClick(){
    this.fetchPhoto()
  }

  fetchPhoto(){
    this.photosService.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular
    })
  }

}
