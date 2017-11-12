import { Component } from '@angular/core';

import { IonicPage, App, NavController, ToastController, Tabs } from 'ionic-angular';

import { GitHubProvider } from '../../providers/github/github';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(
    private github: GitHubProvider,
    private app: App,
    private navCtrl: NavController,
    private toastCtrl: ToastController) {
  }



  submit(form) {
    let username = form.controls.username.value;
    let password = form.controls.password.value;
    this.github.authenticate(username, password).subscribe(
      data => {
        this.github.setValues(username, password);
        this.navCtrl.setRoot(ProfilePage);
      },
      error => {
        if (error.status == 401) {
          let toast = this.toastCtrl.create({
            message: error.json().message,
            duration: 3000
          });
          toast.present();
        } else {
          console.error(error);
        }
      }
    );
  }
}
