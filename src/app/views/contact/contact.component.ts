import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
