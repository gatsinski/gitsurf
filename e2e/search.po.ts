import { browser, by, element } from 'protractor';


export class SearchPage {
    public pageHeader = {
        title: element(by.css('page-search ion-title.title div')),
    };
};
