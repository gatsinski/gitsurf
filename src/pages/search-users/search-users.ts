import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { DetailsUserPage } from '../details-user/details-user';


@IonicPage()
@Component({
  selector: 'page-search-users',
  templateUrl: 'search-users.html',
})
export class SearchUsersPage {
  private apiResponse;
  private type:string = 'users';

    constructor(private navCtrl: NavController) {
    }

    updateApiResponse(response) {
      this.apiResponse = response;
    }

  goToDetails(user) {
    this.navCtrl.push(DetailsUserPage, {'username': user.login});
  }
}
