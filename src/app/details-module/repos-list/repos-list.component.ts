import { Component, OnInit } from '@angular/core';
import { GithubApisService } from 'src/app/github-apis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  my_repos: any;
  username: string

  constructor(
    private gitservice: GithubApisService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (res) => {
        this.username = res.username
        this.getRepos()
      }
    )

  }
  // ng generate module shared-module
  getRepos(): any {
    this.gitservice.reposList(this.username).subscribe(
      (response) => {
        this.my_repos = response
      }
    )
  }

}
