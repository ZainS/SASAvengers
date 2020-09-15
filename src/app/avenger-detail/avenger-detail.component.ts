import { Component, OnInit, Input } from '@angular/core';
import { Avenger } from './../hero/avenger';
import { AvengerService } from '../hero/avenger.service';

@Component({
  selector: 'app-avenger-detail',
  templateUrl: './avenger-detail.component.html',
  styleUrls: ['./avenger-detail.component.css']
})
export class AvengerDetailComponent implements OnInit {
  @Input() avenger:Avenger;

  constructor(private avengerService: AvengerService) { }

  ngOnInit(): void {
  }

  isCurrent(avenger){
    avenger.current=='YES'?avenger.current='NO':avenger.current='YES'
    this.avengerService.edit(avenger).subscribe();
  }

}
