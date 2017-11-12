import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GitHubProvider } from '../../providers/github/github';
import { DetailsUserPage } from '../details-user/details-user';


@IonicPage()
@Component({
  selector: 'page-details-repository',
  templateUrl: 'details-repository.html',
})
export class DetailsRepositoryPage {
  private repository;
  private errorMessage;
  private readme;

  constructor(
    private github: GitHubProvider,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    let repositoryFullName = navParams.get('repositoryFullName');

    this.github.getDetailsRepository(repositoryFullName).subscribe(
      data => {
        this.repository = data.json();
      },
      err => {
        if (err.status == 404) {
          this.errorMessage = err.json().message;
        } else {
          console.error(err);
        }
      }
    );


    this.github.getRepositoryReadme(repositoryFullName).subscribe(
      data => {
        this.readme = data.text();
      },
      err => {
        if (err.status != 404) {
          console.error(err);
        }
      }
    );
  }

  goToUser(username) {
    this.navCtrl.push(DetailsUserPage, { 'username': username });
  }
}
