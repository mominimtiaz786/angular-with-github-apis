import { Component, OnInit } from '@angular/core';
import { GithubApisService } from '../github-apis.service';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users_data: any
  list_name: string = "Github Users List"
  users_keys: any = [
    {'key':'id','name': 'ID'},
    {'key':'avatar_url','name': 'Avatar'},
    {'key':'login','name': 'Username'},
  ]
  spinner_display: string='none'; 

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
        
        if (res.hasOwnProperty('items')) {
          this.users_data = res['items']
          this.list_name = "Search Results"
        }
        else {this.users_data = res;
          this.list_name = "Github Users List"}

        this.spinner_display = 'none';

      }
    )
  }

  searchStream(term: string): void {
    this.spinner_display = 'block'
    this.searchTerms.next(term);
  }


}
