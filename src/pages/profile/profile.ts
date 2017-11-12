import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitHubService } from '../../services/github';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private errorMessage: String;
  private userData: JSON;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private github: GitHubService
  ) {
    if (!github.userData) {
      this.github.getDetailsUser(github.username).subscribe(
        data => {
          github.userData = data.json();
          this.userData = data.json();
        },
        err => {
          if (err.status == 404) {
            this.errorMessage = err.json().message;
          } else {
            console.error(err);
          }
        }
      );
    } else {
      this.userData = github.userData;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
