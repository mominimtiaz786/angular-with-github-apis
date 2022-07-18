import { Component, Input, OnInit } from '@angular/core';
import { GithubApisService } from 'src/app/github-apis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  @Input() my_repos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
