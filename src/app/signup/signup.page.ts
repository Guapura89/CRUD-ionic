import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formSignup: FormGroup;

  constructor(
    public fb: FormBuilder,
    private alertController: AlertController
  ) {
    this.formSignup = this.fb.group({
      name: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
    });
  }
  async presentAlert() {
    const f = this.formSignup.value;
    if (this.formSignup.invalid) {
      const alert = await this.alertController.create({
        header: 'Failed',
        subHeader: 'You need to fill all the inputs',
        message: 'Try again',
        buttons: ['OK'],
        backdropDismiss: false,
      });

      await alert.present();
    } else {
      const alertG = await this.alertController.create({
        header: 'All right',
        subHeader: 'Go back to login',
        buttons: ['OK'],
        backdropDismiss: false,
      });

      await alertG.present();
    }
  }

  ngOnInit() {}
}
