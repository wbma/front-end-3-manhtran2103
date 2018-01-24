import { Component, OnInit } from '@angular/core';
import {MediaService} from '../../services/media.service';
import {DigitransitService} from '../../services/digitransit.service';
@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
  printThis: string;
  mediaArray: any;
  stopArray:  any;
  stop: string;
  
  constructor(private mediaService : MediaService,
    private digitransitService: DigitransitService) { }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      this.mediaArray = data;
      this.mediaArray.map((media, index)=> {
        media.filename = this.mediaService.mediaUrl + media.filename.split('.')[0] +"-tn320.png";
      });
      console.log(this.mediaArray)
    });
    
    
   
  }
  getDigitransit(){
    this.digitransitService.getRoutes(this.stop).subscribe(data => {
      console.log(data['data'].stops);
      this.stopArray = data['data'].stops});
     
  }
  

}
