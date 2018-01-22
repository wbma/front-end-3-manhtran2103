import { Component, OnInit } from '@angular/core';
import {MediaService} from '../../services/media.service';
@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
  printThis: string;
  mediaArray: any;
  
  constructor(private mediaService : MediaService) { }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;
      this.mediaArray.map((media, index)=> {
        media.filename = this.mediaService.mediaUrl + media.filename.split('.')[0] +"-tn320.png";
      });
      console.log(this.mediaArray)
    });
   
  }

}
