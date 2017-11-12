import { browser, by, element } from 'protractor';


export class SearchIssuesPage {
    public page = element(by.css('page-search-issues'));
    public pageHeader = {
        title: this.page.element(by.css('ion-title.title div')),
    };

    public searchForm = {
        searchTermInput: this.page.element(by.cssContainingText('ion-label', 'Search term')).
            element(by.xpath('../ion-input//input')),
        //searchTermInput: element(by.cssContainingText('ion-label', 'Search term')).
        //    element(by.xpath('following-sibling::ion-input//input')),
        searchButton: this.page.element(by.cssContainingText('span.button-inner', 'Search')).element(by.xpath('..')),
        searchResultList: this.page.element(by.css('ion-list')),
        searchResultDetailButtons: this.page.all(by.cssContainingText('span', 'Details'))
    };
};
