import { Component, OnInit, Input } from '@angular/core';
import { Avenger } from './../hero/avenger';
import { AvengerService } from '../hero/avenger.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-avenger-detail',
  templateUrl: './avenger-detail.component.html',
  styleUrls: ['./avenger-detail.component.css']
})
export class AvengerDetailComponent implements OnInit {
  avenger:Avenger;
  data:Avenger[];
  constructor(private avengerService: AvengerService, private route: ActivatedRoute,
    private router: Router, private location: Location) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.avengerService.getList()
    .subscribe(data => {
      this.data = data
      this.assignAvenger(id)
    })
  }
  goBack(): void {
    this.location.back();
  }
  isCurrent(avenger){
    avenger.current=='YES'?avenger.current='NO':avenger.current='YES'
    this.avengerService.edit(avenger).subscribe(()=>this.goBack());
  }
 
  assignAvenger(id){
    this.avenger = this.data.find(avenger => avenger.id == id);
  }
}
