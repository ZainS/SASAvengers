import { Component, OnInit } from '@angular/core';
import { Avenger } from '../hero/avenger';
import { AvengerService } from '../hero/avenger.service';

@Component({
  selector: 'app-avengers-list',
  templateUrl: './avengers-list.component.html',
  styleUrls: ['./avengers-list.component.css']
})
export class AvengersListComponent implements OnInit {

  avengers : Avenger[];
  avenger: Avenger;
  constructor(private avengerService: AvengerService){}

  ngOnInit(){
    this.avengerService.getList().subscribe(avengers => this.avengers = avengers);
  }
 
  delete(avenger){
    this.avengers = this.avengers.filter(a => a !== avenger);
    this.avengerService.delete(avenger).subscribe();
    this.avenger = null;
  }

  onSelect(avenger){
    this.avenger = avenger
  }
}
