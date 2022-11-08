import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
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
  constructor(
    public fb: FormBuilder,
    private alertController: AlertController,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      name: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
    });
  }

  async ingresar() {
    const f = this.formLogin.value;

    const usuario = JSON.parse(localStorage.getItem('user'));

    if (usuario.userName === f.name && usuario.pass === f.pass) {
      this.router.navigate(['/profile', f.name]);
    } else {
      const alert = await this.alertController.create({
        header: 'Login failed',
        message: 'Incorrect credentials',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  ngOnInit() {}
}
