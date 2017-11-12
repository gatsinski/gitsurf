import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { LoginPage } from '../login/login';

import { GitHubProvider } from '../../providers/github/github';


@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  searchPage = SearchPage;
  loginPage = LoginPage;

  constructor(private github: GitHubProvider) {
  }

  getLoginTabTitle() {
    if (!this.github.isAuthenticated) {
      return "Login";
    } else {
      return "Profile";
    }
  }
}
