import { browser, by, element } from 'protractor';

export class SearchUsersPage {
    public page = element(by.css('page-search-users'));
    public pageHeader = {
        title: this.page.element(by.css('ion-title.title div')),
    };

    public searchForm = {
        searchTermInput: this.page.element(by.cssContainingText('ion-label', 'Search term')).
            element(by.xpath('../ion-input//input')),
        searchButton: this.page.element(by.cssContainingText('span.button-inner', 'Search')).element(by.xpath('..')),
        searchResultList: this.page.element(by.css('ion-list')),
        searchResultDetailButtons: this.page.all(by.cssContainingText('span', 'View'))
    };
};
