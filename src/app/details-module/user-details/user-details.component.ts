import { Component, OnInit } from '@angular/core';
import { GithubApisService } from 'src/app/github-apis.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  current_user: any
  username: string

  constructor(
    private gitservice: GithubApisService,
    private route: ActivatedRoute) {
     }

  ngOnInit(): void {
    this.route.params.subscribe(
      (res)=>{
        this.username = res.username
        this.getUserObject()
        this.gitservice.followersList(this.username)
        
      }
    )

  }


  getUserObject(): any {
    this.gitservice.userObject(this.username).subscribe(
      response => {
        this.current_user = response
      }
    )
  }




}