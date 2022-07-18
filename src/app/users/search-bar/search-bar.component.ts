import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { GithubApisService } from '../../github-apis.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() newSearchEvent = new EventEmitter<string>();
  // private searchTerms = new Subject<string>();

  constructor(private gitservice: GithubApisService) { }

  addNewTerm(value: string) {
    this.newSearchEvent.emit(value);
  }

  ngOnInit(): void {

  }

}
