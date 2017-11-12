import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GitHubProvider } from '../../providers/github/github';


@IonicPage()
@Component({
  selector: 'page-details-issue',
  templateUrl: 'details-issue.html',
})
export class DetailsIssuePage {
  private issue;
  private comments;
  private errorMessage;

  constructor(
    private github: GitHubProvider,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    let issue = navParams.get('issue');

    this.github.getDetailsIssue(issue.url).subscribe(
      data => {
        this.issue = data.json();
      },
      err => {
        if (err.status == 404) {
          this.errorMessage = err.json().message;
        } else {
          console.error(err);
        }
      }
    );

    this.github.getIssueComments(issue.comments_url).subscribe(
      data => {
        this.comments = data.json();
        console.log(this.comments);
      },
      err => {
        if (err.status == 404) {
          this.errorMessage = err.json().message;
        } else {
          console.error(err);
        }
      }
    );

  }

}
