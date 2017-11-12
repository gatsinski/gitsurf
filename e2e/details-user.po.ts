import { browser, by, element } from 'protractor';


export class DetailsUserPage {
    public page = element(by.css('page-details-user'));
    public pageHeader = {
        title: this.page.element(by.css('ion-title.title div')),
    };
};
