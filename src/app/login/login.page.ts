import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formLogin = this.fb.group({
      name: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}
}
