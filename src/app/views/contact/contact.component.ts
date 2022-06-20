import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  itemPadre = 'Pomelo';
  propPadre: string[];
  setName = 'Malena'

  contactForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  itemsForm = new FormGroup({
    fruit: new FormControl('')
  })

  constructor() {
    this.propPadre = []
  }

  ngOnInit(): void {
  }

  test():void {
    let fName = this.contactForm.controls["fname"].value;
    let lName = this.contactForm.controls["lname"].value;
    let employee = fName + " " + lName;
    this.propPadre.push(employee);
    console.log(this.propPadre);
  }

  setFrutas() {
    let fruit = this.itemsForm.controls['fruit'].value;
    this.elementos.push(fruit);
  }

  @Output() newItemEvent = new EventEmitter <string>();

  addNewName(value: string){
    this.newItemEvent.emit(value);
  }

  elementos= ['pomelo', 'sandia', 'melocotón'];

  addItem(newItem: any){
    this.itemsForm.controls['fruit'].setValue(newItem);
    
  }
}
