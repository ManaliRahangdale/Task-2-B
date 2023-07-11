import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-form',
  templateUrl: './radio-form.component.html',
  styleUrls: ['./radio-form.component.css']
})
export class RadioFormComponent implements OnInit {
  radioFormObj : FormGroup | any;
  // radioControl = new FormControl('');
  // showformField = false;
  ngOnInit(): void {
   this.radioFormObj = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    contactDetails : new FormGroup({
      contactMethod : new FormControl(''),
      phoneNo : new FormControl('',Validators.required),
      emailId : new FormControl('',Validators.required)
    })
   })
  }
  // onradioChnage(){
  //   const selectedOption = this.radioControl.value;
  //   this.showformField = (selectedOption === 'email')
  // }
  onSubmit(){
    console.log(this.radioFormObj.value)
    // this.radioFormObj.reset()
  }

}
