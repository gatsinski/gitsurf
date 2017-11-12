import { SearchPage } from './search.po';
import { SearchIssuesPage } from './search-issues.po';
import { SearchRepositoriesPage } from './search-repositories.po';
import { SearchUsersPage } from './search-users.po';
import { DetailsIssuePage } from './details-issue.po';
import { DetailsRepositoryPage } from './details-repository.po';
import { DetailsUserPage } from './details-user.po';

import { browser, by, element, ExpectedConditions, until } from 'protractor';


// spec.js
describe('Search tests', function() {

  let searchPage: SearchPage = new SearchPage();
  let searchIssuesPage: SearchIssuesPage = new SearchIssuesPage();
  let searchRepositoriesPage: SearchRepositoriesPage = new SearchRepositoriesPage();
  let searchUsersPage: SearchUsersPage = new SearchUsersPage();
  let detailsIssuePage: DetailsIssuePage = new DetailsIssuePage();
  let detailsRepositoryPage: DetailsRepositoryPage = new DetailsRepositoryPage();
  let detailsUserPage: DetailsUserPage = new DetailsUserPage();


  it('Test Search Issues page', async function() {
    // Load app
    browser.get('/');

    // Check if Search page is loaded
    searchPage.pageHeader.title.getText().then(text => expect(text).toEqual('Search'));

    // Navigate to Search Issues page
    element(by.cssContainingText('ion-label', 'Issues')).element(by.xpath('../..')).click();

    // Wait until page is loaded
    browser.wait(ExpectedConditions.visibilityOf(searchIssuesPage.page), 5000);

    // Check if  Search Issues page has the right title
    searchIssuesPage.pageHeader.title.getText().then(text => expect(text).toEqual('Search Issues'));

    // Fill search term input
    let searchTerm = searchIssuesPage.searchForm.searchTermInput;
    browser.actions().mouseMove(searchTerm).click().perform();
    searchTerm.sendKeys('Test');

    // Click on Search button
    searchIssuesPage.searchForm.searchButton.click();

    // Wait until results is avilable
    browser.wait(ExpectedConditions.presenceOf(searchIssuesPage.searchForm.searchResultList),
                                               10000,
                                               'Element taking too long to appear in the DOM');

    // Navigate to Issue Details page
    searchIssuesPage.searchForm.searchResultDetailButtons.first().click();

    // // Wait until page is loaded
    browser.wait(ExpectedConditions.visibilityOf(detailsIssuePage.page), 5000);

    // Check if correct title prefix is applied
    detailsIssuePage.pageHeader.title.getText().then(text => expect(text.indexOf('Issue') !== -1).toBe(true));
  });

  it('Test Search Repositories page', async function() {
    // Load app
    browser.get('/');

    // Check if Search page is loaded
    searchPage.pageHeader.title.getText().then(text => expect(text).toEqual('Search'));

    // Navigate to Search Issues page
    element(by.cssContainingText('ion-label', 'Repositories')).element(by.xpath('../..')).click();

    // Wait until page is loaded
    browser.wait(ExpectedConditions.visibilityOf(searchRepositoriesPage.page), 5000);

    // Check if  Search Issues page has the right title
    searchRepositoriesPage.pageHeader.title.getText().then(text => expect(text).toEqual('Search repositories'));

    // Fill search term input
    let searchTerm = searchRepositoriesPage.searchForm.searchTermInput;
    browser.actions().mouseMove(searchTerm).click().perform();
    searchTerm.sendKeys('Kindergarten-management-system');

    // Click on Search button
    searchRepositoriesPage.searchForm.searchButton.click();

    // Wait until results is avilable
    browser.wait(ExpectedConditions.presenceOf(searchRepositoriesPage.searchForm.searchResultList),
                                               10000,
                                               'Element taking too long to appear in the DOM');

    // Navigate to Issue Details page
    searchRepositoriesPage.searchForm.searchResultDetailButtons.first().click();

    // Wait until page is loaded
    browser.wait(ExpectedConditions.visibilityOf(detailsRepositoryPage.page), 5000);

    // Check if correct title prefix is applied
    detailsRepositoryPage.pageHeader.title.getText().then(text => expect(text).toEqual('kindergarten-management-system'));
  });

  it('Test Search Users page', async function() {
    // Load app
    browser.get('/');

    // Check if Search page is loaded
    searchPage.pageHeader.title.getText().then(text => expect(text).toEqual('Search'));

    // Navigate to Search Issues page
    element(by.cssContainingText('ion-label', 'Users')).element(by.xpath('../..')).click();

    // Wait until page is loaded
    browser.wait(ExpectedConditions.visibilityOf(searchUsersPage.page), 5000);

    // Check if  Search Issues page has the right title
    searchUsersPage.pageHeader.title.getText().then(text => expect(text).toEqual('Search users'));

    // Fill search term input
    let searchTerm = searchUsersPage.searchForm.searchTermInput;
    browser.actions().mouseMove(searchTerm).click().perform();
    searchTerm.sendKeys('gatsinski');

    // Click on Search button
    searchUsersPage.searchForm.searchButton.click();

    // Wait until results is avilable
    browser.wait(ExpectedConditions.presenceOf(searchUsersPage.searchForm.searchResultList),
                                               10000,
                                               'Element taking too long to appear in the DOM');

    // Navigate to Issue Details page
    searchUsersPage.searchForm.searchResultDetailButtons.first().click();

    // Wait until page is loaded
    browser.wait(ExpectedConditions.visibilityOf(detailsUserPage.page), 5000);

    // Check if correct title prefix is applied
    detailsUserPage.pageHeader.title.getText().then(text => expect(text).toEqual('gatsinski'));
  });

});
