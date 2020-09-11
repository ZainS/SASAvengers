import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvengerService } from '../hero/avenger.service';
import { Avenger } from '../hero/avenger';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-avengeredit',
  templateUrl: './avengeredit.component.html',
  styleUrls: ['./avengeredit.component.css']
})
export class AvengereditComponent implements OnInit {
  changeForm: FormGroup
  avenger:Avenger;
  data:Avenger[];
  CurrentValue: ['YES', 'NO'];

  constructor(private avengerService: AvengerService, private route: ActivatedRoute,
    private router: Router, private location: Location, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.changeForm =this.formBuilder.group({
      id: [],
      url : [],
      name : [],
      appearances: [],
      current: [],
      gender: [],
      year: [],
      yearsSinceJoining: [],
      honorary: [],
      notes: []
    })
    this.avengerService.getList().subscribe(data => {
      this.data = data
      this.assignAvenger(id)
    })
  }
  assignAvenger(id){
    this.avenger = this.data.find(avenger => avenger.id == id);
    this.loadDataToForm();
  }
  loadDataToForm(){
    this.changeForm.patchValue({
      id: this.avenger.id,
      url : this.avenger.url,
      name : this.avenger.name,
      appearances: this.avenger.appearances,
      current: this.avenger.current,
      gender: this.avenger.gender,
      year: this.avenger.year,
      yearsSinceJoining: this.avenger.yearsSinceJoining,
      honorary: this.avenger.honorary,
      notes: this.avenger.notes
    })
  }
  goBack(): void {
    this.location.back();
  }
  onSubmit(){
    let avenger = this.changeForm.value;
    this.avengerService.edit(avenger).subscribe(()=>this.goBack());
  }
}
