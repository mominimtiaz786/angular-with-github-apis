import { Component, OnInit, Input } from '@angular/core';
// Importing the services created
import { GithubApisService } from '../../github-apis.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() my_json: any;
  @Input() fields: any;
  @Input() list_name : string;
  

  constructor(
    private gitservice: GithubApisService
  ) { }


  ngOnInit(): void {
    
  }

}
