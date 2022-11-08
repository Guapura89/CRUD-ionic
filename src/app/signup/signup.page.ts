import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
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
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    this.formSignup = this.fb.group({
      name: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
    });
  }
  async presentAlert() {
    if (this.formSignup.invalid) {
      const alert = await this.alertController.create({
        header: 'Failed',
        subHeader: 'You need to fill all the inputs',
        message: 'Try again',
        buttons: ['OK'],
        backdropDismiss: false,
      });

      await alert.present();
      return;
    } else {
      const f = this.formSignup.value;
      const user = {
        userName: f.name,
        pass: f.pass,
      };
      localStorage.setItem('user', JSON.stringify(user));
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario guardado',
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

  ngOnInit() {}
}
