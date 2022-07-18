import { Component, OnInit } from '@angular/core';
import { GithubApisService } from '../github-apis.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private gitservice : GithubApisService) {
    this.gitservice.getUsers()
   }

  ngOnInit(): void {
  }

}
