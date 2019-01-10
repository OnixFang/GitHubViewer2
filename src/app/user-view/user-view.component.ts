import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute } from '@angular/router';
import { IGitHubUser } from '../igit-hub-user';
import { IRepository } from '../irepository';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
    gitHubuser: IGitHubUser;
    repositories: IRepository[];
    errorMessage: string;

    constructor(
        private githubService: GithubService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.githubService.getUser(this.route.snapshot.paramMap.get('username')).subscribe(
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
