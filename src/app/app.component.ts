import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IGitHubUser } from './igit-hub-user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private apiUrl: string = 'https://api.github.com/users/';
    pageHeader: string = 'GitHub Viewer 2.0';
    gitHubuser: IGitHubUser;
    repositories: any;
    userSearch: string = "";

    constructor(private http: HttpClient) { }

    search(): void {
        this.http.get<IGitHubUser>(this.apiUrl + this.userSearch).subscribe((data) => {
            this.gitHubuser = data;
            this.http.get(data.repos_url).subscribe(repos => this.repositories = repos);
        });
    }
}
