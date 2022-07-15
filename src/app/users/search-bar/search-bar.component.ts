import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { GithubApisService } from '../../github-apis.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // private searchTerms = new Subject<string>();

  constructor(private gitservice: GithubApisService) { }

  ngOnInit(): void {

  }

  search(term: string): void {
    this.gitservice.searchUsers(term)
  }

}
