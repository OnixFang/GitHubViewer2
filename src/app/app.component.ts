import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IGitHubUser } from './git-hub-user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private apiUrl: string = 'https://api.github.com/users/angular';
    message: string = 'Hello Angular!';
    gitHubuser: IGitHubUser;
    userSearch: string;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<IGitHubUser>(this.apiUrl).subscribe(data => this.gitHubuser = data);
    }
}
