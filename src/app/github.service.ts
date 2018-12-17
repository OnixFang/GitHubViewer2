import { Injectable } from '@angular/core';
import { IGitHubUser } from './igit-hub-user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepository } from './irepository';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    private apiUrl: string = 'https://api.github.com/users/';

    constructor(private http: HttpClient) { }

    getUser(username): Observable<IGitHubUser> {
        return this.http.get<IGitHubUser>(this.apiUrl + username);
    }

    getRepos(user): Observable<IRepository[]> {
        return this.http.get<IRepository[]>(user.repos_url);
    }
}
