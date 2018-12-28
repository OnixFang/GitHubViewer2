import { Component } from '@angular/core';
import { IGitHubUser } from '../igit-hub-user';
import { IRepository } from '../irepository';
import { GithubService } from '../github.service';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
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
        this.userSearch = "";
    }
}
