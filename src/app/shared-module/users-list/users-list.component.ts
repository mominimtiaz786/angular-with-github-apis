import { Component, OnInit, Input } from '@angular/core';
// Importing the services created
import { GithubApisService } from '../../github-apis.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  my_json: any
  list_name : string

  constructor(
    private gitservice: GithubApisService
  ) { }


  ngOnInit(): void {

    // calling the function that will triger the subscribe of the Observable Heroes
    // this.gitservice.getUsers()

    this.gitservice.users_array.subscribe(
      (response) => {
        this.my_json = response
      }
    )

    this.gitservice.list_name.subscribe(
      (response) => {
        this.list_name = response
      }
    )

  }

}
