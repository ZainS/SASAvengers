import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Avenger } from './../hero/avenger';
import { AvengerService } from './../hero/avenger.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-new-avenger',
  templateUrl: './new-avenger.component.html',
  styleUrls: ['./new-avenger.component.css']
})
export class NewAvengerComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private avengerService: AvengerService, 
    private location: Location) { }

  ngOnInit(): void {
    this.registerForm =this.formBuilder.group({
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
  }
  goBack(): void {
    this.location.back();
  }
  onSubmit(){
    let avenger = this.registerForm.value;
    this.avengerService.create(avenger).subscribe(()=>this.goBack());
  }
}
