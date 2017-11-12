import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { DetailsRepositoryPage } from '../details-repository/details-repository';
import { DetailsUserPage } from '../details-user/details-user';


@IonicPage()
@Component({
  selector: 'page-search-repositories',
  templateUrl: 'search-repositories.html'
})
export class SearchRepositoriesPage {
  private apiResponse;
  private type:string = 'repositories';

  constructor(private navCtrl: NavController) {
  }

  updateApiResponse(response) {
    this.apiResponse = response;
  }

  goToDetails(repository) {
    this.navCtrl.push(DetailsRepositoryPage,
                      {'repositoryFullName': repository.full_name});
  }

  goToUser(username) {
    this.navCtrl.push(DetailsUserPage, {'username': username});
  }

}
