import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class GitHubService {
  public isAuthenticated: Boolean = false;
  public username: String = null;
  public password: String = null;
  public userData: JSON;
  private gitHubApiUrl: String = 'https://api.github.com/';

  constructor(private http: Http) {
  }

  getBasicInfo(username) {
    let info = this.http.get(`${this.gitHubApiUrl}users/${username}`);
    return info;
  }

  getRepositories(username) {
    let repos = this.http.get(`${this.gitHubApiUrl}users/${username}/repos`);
    return repos;
  }

  fetchData(url) {
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getDetailsIssue(url) {
    return this.fetchData(url)
  };

  getIssueComments(url) {
    return this.fetchData(url)
  }

  getDetailsRepository(terms) {
    let url = `${this.gitHubApiUrl}repos/${terms}`;
    return this.http.get(url, { headers: this.getHeaders() });
  };

  getRepositoryReadme(repositoryPath) {
    let url = `${this.gitHubApiUrl}repos/${repositoryPath}/readme`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getDetailsUser(username) {
    let url = `${this.gitHubApiUrl}users/${username}`;
    return this.http.get(url, { headers: this.getHeaders() });
  };

  searchIssues(terms, sorting, ordering) {
    return this.search('issues', terms, sorting, ordering);
  }

  searchRepositories(terms, sorting, ordering) {
    return this.search('repositories', terms, sorting, ordering);
  }

  searchUsers(terms, sorting, ordering) {
    return this.search('users', terms, sorting, ordering);
  }

  search(type, terms, sorting, ordering) {
    if (!terms)
      return;

    let newTerms = terms.replace(/ /g, '+');
    let url = `${this.gitHubApiUrl}search/${type}?q=${newTerms}`;

    if (sorting !== 'bestMatch') {
      url = `${url}&sort=${sorting}`;
    }

    if (ordering) {
      url = `${url}&order=${ordering}`;
    }

    return this.http.get(url, { headers: this.getHeaders() });
  }

  private encode_utf8(s) {
    return btoa(encodeURI(s));
  }

  setValues(username, password) {
    this.username = username;
    this.password = password;
    this.isAuthenticated = true;
    console.log('setValues called');
  }

  authenticate(username, password) {
    let headers = new Headers();
    headers.append('Accept', 'application/vnd.github.VERSION.html');
    let userPass = `${username}:${password}`;
    headers.append('Authorization', 'Basic ' + this.encode_utf8(userPass));
    let url = `${this.gitHubApiUrl}user`;
    return this.http.get(url, { headers: headers });
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/vnd.github.VERSION.html');
    if (this.isAuthenticated) {
      let userPass = `${this.username}:${this.password}`;
      headers.append("Authorization", 'Basic ' + btoa(userPass));
    }
    return headers;
  }
}
