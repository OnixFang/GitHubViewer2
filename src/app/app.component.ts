import { Component } from '@angular/core';
import { IGitHubUser } from './igit-hub-user';
import { GithubService } from './github.service';
import { IRepository } from './irepository';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private apiUrl: string = 'https://api.github.com/users/';
    pageHeader: string = 'GitHub Viewer 2.0';
    gitHubuser: IGitHubUser;
    repositories: IRepository[];
    userSearch: string = "";
    errorMessage: string;

    constructor(
        private githubService: GithubService) { }

    search(): void {
        this.githubService.getUser(this.userSearch).subscribe(
            (user) => {
                this.errorMessage = null;
                this.gitHubuser = user;
                this.githubService.getRepos(this.gitHubuser).subscribe(repos => this.repositories = repos);
            },
            (error) => {
                if (error.status === 403) {
                    this.errorMessage = error.error.message;
                    this.gitHubuser = null;
                    this.repositories = null;
                } else {
                    this.errorMessage = error.message;
                    this.gitHubuser = null;
                    this.repositories = null;
                }
            });
    }
}
