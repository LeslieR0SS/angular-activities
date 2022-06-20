import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-contacted',
  templateUrl: './contacted.component.html',
  styleUrls: ['./contacted.component.scss']
})
export class ContactedComponent implements OnInit {

  @Input() items!: string[];
  @Output() setItemValue = new EventEmitter <string>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.propHijo)
  }

  // addNewItem(newItem: string){
  //   console.log(newItem);
  //   this.setSurname.emit(newItem);
  
  // }

  setValueFruta(value: string) {
    this.setItemValue.emit(value)
  }

}