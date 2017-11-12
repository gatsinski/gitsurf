import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { GitHubService } from '../../services/github';


@Component({
  selector: 'search-filter',
  templateUrl: 'search-filter.html',
})
export class SearchFilterComponent {
  @Output() searchResponse:EventEmitter<string> = new EventEmitter();
  @Input() searchType:string;

  public sortChoices = [
    { value: 'bestMatch', display: 'Best match' },
    { value: 'comments', display: 'Comments' },
    { value: 'created', display: 'Time created' },
    { value: 'updated', display: 'Time updated' }
  ];

  public orderChoices = [
    { value: 'desc', display: 'Descending' },
    { value: 'asc', display: 'Ascending' },
  ];

  public sortChoice = 'bestMatch';
  public orderChoice = 'desc';
  public searchTerm;

  constructor(private github: GitHubService) {
  }

  search() {
    if (!this.searchTerm)
      return;

    this.github.search(this.searchType,
                       this.searchTerm,
                       this.sortChoice,
                       this.orderChoice).subscribe(
      data => {
        this.searchResponse.emit(data.json());
      },
      err => {
          console.error(err);
      },
      () => console.log('getInfo completed')
    );
  }

}
