import { Component } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
    userSearch: string = "";
    errorMessage: string;

    constructor(
        private githubService: GithubService,
        private router: Router) { }

    search(): void {
        this.githubService.getUser(this.userSearch).subscribe(
            () => {
                this.errorMessage = null;
                this.router.navigate(['/user/' + this.userSearch]);
            },
            (error) => {
                if (error.status === 403) {
                    this.errorMessage = error.error.message;
                } else {
                    this.errorMessage = error.message;
                }
            });
    }
}
