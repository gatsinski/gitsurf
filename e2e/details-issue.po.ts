import { browser, by, element } from 'protractor';


export class DetailsIssuePage {
    public page = element(by.css('page-details-issue'));
    public pageHeader = {
        title: this.page.element(by.css('ion-title.title div')),
    };
};
