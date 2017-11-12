import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GitHubProvider } from '../../providers/github/github';


@IonicPage()
@Component({
  selector: 'page-details-user',
  templateUrl: 'details-user.html',
})
export class DetailsUserPage {
  private user;
  private errorMessage;
  private readme;

  constructor(
    private github: GitHubProvider,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    let username = navParams.get('username');

    this.github.getDetailsUser(username).subscribe(
      data => {
        this.user = data.json();
      },
      err => {
        if (err.status == 404) {
          this.errorMessage = err.json().message;
        } else {
          console.error(err);
        }
      }
    );
  };
}
