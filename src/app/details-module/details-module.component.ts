import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApisService } from '../github-apis.service';
import { SimpleChanges } from '@angular/core';
import { $ } from 'protractor';
@Component({
  selector: 'app-details-module',
  templateUrl: './details-module.component.html',
  styleUrls: ['./details-module.component.css']
})
export class DetailsModuleComponent implements OnInit {

  current_user_data: any;
  username: string;
  list_name: string;
  followers_array: any;
  repos_array: any;

  constructor(
    private gitservice: GithubApisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (res) => {
        this.username = res.username
        this.getUserObject()
        this.getRepos()
        this.gitservice.followersList(this.username).subscribe(
          (res) => {
            this.followers_array = res;
            this.list_name = `"${this.username}'s" Followers List`
          }
        )

      }
    )

  }

  getUserObject(): any {
    this.gitservice.userObject(this.username).subscribe(
      response => {
        this.current_user_data = response
      }
    )
  }

  getRepos(): any {
    this.gitservice.reposList(this.username).subscribe(
      (response) => {
        this.repos_array = response
      }
    )
  }

}
