import { Component, OnInit, Input } from '@angular/core';
import { Avenger } from './../hero/avenger';
import { AvengerService } from '../hero/avenger.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-avenger-detail',
  templateUrl: './avenger-detail.component.html',
  styleUrls: ['./avenger-detail.component.css']
})
export class AvengerDetailComponent implements OnInit {
  @Input() avenger:Avenger;
  data:Avenger[];
  constructor(private avengerService: AvengerService, private route: ActivatedRoute,
    private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  isCurrent(avenger){
    avenger.current=='YES'?avenger.current='NO':avenger.current='YES'
    this.avengerService.edit(avenger).subscribe();
  }

}
