import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubApisService {

  private API_URL = 'https://api.github.com/';  // URL to web api
  list_name = new Subject<string>();
  current_list_name = this.list_name.asObservable()

  setListName(next: string) {
    this.list_name.next(next)
  }

  users_array = new Subject<any>();
  current_users_array = this.users_array.asObservable()

  setUserArray(next: any) {
    this.users_array.next(next)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** GET users from the server */
  getUsers(): void {
    let url = this.API_URL + "users"
    let obs = this.http.get<any[]>(url)
      .pipe(
        tap(x => console.log('fetched users')),
        catchError(this.handleError<any[]>('getUsers', []))
      ).subscribe(
        response => {
          this.setUserArray(response);
          this.setListName("Github Users List")
        }
      );

  }


  /* GET users whose name contains search term */
  searchUsers(term: string): void {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      this.getUsers();
      return
    }
    let url = this.API_URL + "search/users"
    this.http.get(`${url}?q=${term}`).pipe(
      tap(x => x['items'].length ?
        console.log(`found Users matching "${term}"`) :
        console.log(`no Users matching "${term}"`)),
      catchError(this.handleError<any[]>('searchUsers', []))
    ).subscribe(
      response => {
        this.setUserArray(response['items'])
        this.setListName(`Search Results on "${term}"`)
      }
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @ param operation - name of the operation that failed
 * @ param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


