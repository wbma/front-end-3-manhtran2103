import { Component, OnInit } from '@angular/core';
import {DigitransitService} from '../../services/digitransit.service';
@Component({
  selector: 'app-digitransit',
  templateUrl: './digitransit.component.html',
  styleUrls: ['./digitransit.component.scss']
})
export class DigitransitComponent implements OnInit {

  constructor(private digitransitService: DigitransitService) { }

  ngOnInit() {
    this.getDigitransit();
  }
  getDigitransit(){
    this.digitransitService.getRoutes("hertton").subscribe(data => console.log(data['data'].stops));
  }
}
