import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  /** GET users from the server */
  getUsers(): Observable<any> {
    let url = this.API_URL + "users"
    let obs = this.http.get<any[]>(url)
      .pipe(
        tap(x => console.log('fetched users')),
        catchError(this.handleError<any[]>('getUsers', []))
      )
      return obs
  }


  /* GET users whose name contains search term */
  searchUsers(term: string): Observable<any> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return this.getUsers();
    }
    let url = this.API_URL + "search/users"
    let obs=this.http.get(`${url}?q=${term}`).pipe(
      tap(x => x['items'].length ?
        console.log(`found Users matching "${term}"`) :
        console.log(`no Users matching "${term}"`)),
      catchError(this.handleError<any[]>('searchUsers', []))
    )
    return obs
  }

  /* GET followers of a particular user */
  followersList(username: string): Observable<any> {

    let obs = this.http.get(`${this.API_URL}users/${username}/followers`).pipe(
      tap(x => x ?
        console.log(`found followers of "${username}"`) :
        console.log(`No followers found "${username}"`)),
      catchError(this.handleError<any[]>('followersList', []))
    )
    return obs
  }

  /* GET repos of a particular user */
  reposList(username: string): Observable<any> {
    if (!username.trim()) {
      return
    }

    return this.http.get(`${this.API_URL}users/${username}/repos`).pipe(
      tap(x => x ?
        console.log(`found Repos of "${username}"`) :
        console.log(`no Repos Found "${username}"`)),
      catchError(this.handleError<any[]>('reposList', []))
    );
  }

  /* GET repos of a particular user */
  userObject(username: string): Observable<any> {
    if (!username.trim()) {
      return
    }
    return this.http.get(`${this.API_URL}users/${username}`).pipe(
      tap(x => x ?
        console.log(`found User"${username}"`) :
        console.log(`User no found "${username}"`)),
      catchError(this.handleError<any[]>('userObject', []))
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


