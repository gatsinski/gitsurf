import { browser, by, element } from 'protractor';


export class DetailsRepositoryPage {
    public page = element(by.css('page-details-repository'));
    public pageHeader = {
        title: this.page.element(by.css('ion-title.title div')),
    };
};
