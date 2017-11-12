import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { DetailsIssuePage } from '../details-issue/details-issue';



@IonicPage()
@Component({
  selector: 'page-search-issues',
  templateUrl: 'search-issues.html',
})
export class SearchIssuesPage {
  private apiResponse;
  private type:string = 'issues';

  constructor(private navCtrl: NavController) {
  }

  updateApiResponse(response) {
    this.apiResponse = response;
  }

  goToDetails(issue) {
    this.navCtrl.push(DetailsIssuePage, {'issue': issue});
  }

}
