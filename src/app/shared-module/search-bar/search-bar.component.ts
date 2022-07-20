import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubApisService } from '../../github-apis.service';
import { Form, FormBuilder,FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public search_results: Observable<any>;
  @Output() newSearchEvent = new EventEmitter<string>();

  searchControl=this.fb.control('')

  constructor(private gitservice: GithubApisService,
    private fb:FormBuilder
    ) { }

  

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe(
      (term) => {
        this.newSearchEvent.emit(term)
      }
    )


  }

}
