import { Injectable } from '@angular/core';
import { IGitHubUser } from './igit-hub-user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepository } from './irepository';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    private usersUrl: string = 'https://api.github.com/users/';
    private repoUrl: string = "https://api.github.com/repos/";

    constructor(private http: HttpClient) { }

    getUser(username): Observable<IGitHubUser> {
        return this.http.get<IGitHubUser>(this.usersUrl + username);
    }

    getRepos(user): Observable<IRepository[]> {
        return this.http.get<IRepository[]>(user.repos_url);
    }

    getRepo(username, reponame): Observable<IRepository> {
        return this.http.get<IRepository>(this.repoUrl + username + "/" + reponame);
    };

    getContributors(repo): Observable<IGitHubUser[]> {
        return this.http.get<IGitHubUser[]>(repo.contributors_url);
    };
}
