import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { DetailsIssuePage } from '../pages/details-issue/details-issue';
import { DetailsRepositoryPage } from '../pages/details-repository/details-repository';
import { DetailsUserPage } from '../pages/details-user/details-user';
import { SearchIssuesPage } from '../pages/search-issues/search-issues';
import { SearchRepositoriesPage } from '../pages/search-repositories/search-repositories';
import { SearchUsersPage } from '../pages/search-users/search-users';
import { LoginPage } from './../pages/login/login';
import { ProfilePage } from './../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { SearchFilterComponent } from '../components/search-filter/search-filter';
import { GitHubProvider } from '../providers/github/github';



@NgModule({
  declarations: [
    MyApp,
    DetailsIssuePage,
    DetailsRepositoryPage,
    DetailsUserPage,
    SearchPage,
    SearchIssuesPage,
    SearchRepositoriesPage,
    SearchUsersPage,
    TabsPage,
    LoginPage,
    ProfilePage,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailsIssuePage,
    DetailsRepositoryPage,
    DetailsUserPage,
    SearchPage,
    SearchIssuesPage,
    SearchRepositoriesPage,
    SearchUsersPage,
    LoginPage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GitHubProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
