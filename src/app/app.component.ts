import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { moment } from './material.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactForm: FormGroup;
  textDirection = 'ltr';

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      givenName: '',
      familyName: '',
      dateOfBirth: moment([2017, 0, 1]),
      phoneNumber: ''
    })
  }

  toggleTextDirection(): void {
    this.textDirection = this.textDirection === 'ltr' ? 'rtl' : 'ltr';
  }
}
