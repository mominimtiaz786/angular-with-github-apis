import { Component, OnInit } from '@angular/core';
import { GithubApisService } from '../github-apis.service';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users_data: any
  list_name: string = "Github Users List"

  search_observables: Observable<any>;

  private searchTerms = new Subject<string>();

  constructor(private gitservice: GithubApisService) { }

  ngOnInit(): void {
    this.gitservice.getUsers().subscribe(
      (res) => {
        this.users_data = res
      }
    )

    this.search_observables = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(
        (term: string) => this.gitservice.searchUsers(term)
      ),
    );

    this.search_observables.subscribe(
      (res) => {
        if (res.hasOwnProperty('items')) this.users_data = res['items']
        else this.users_data = res
      }
    )
  }

  searchStream(term: string): void {
    this.searchTerms.next(term);
  }


}
