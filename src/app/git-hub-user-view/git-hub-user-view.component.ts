import { Component, OnInit, Input } from '@angular/core';
import { IGitHubUser } from '../igit-hub-user';

@Component({
    selector: 'app-git-hub-user-view',
    templateUrl: './git-hub-user-view.component.html',
    styleUrls: ['./git-hub-user-view.component.css']
})
export class GitHubUserViewComponent implements OnInit {
    @Input() gitHubuser: IGitHubUser;
    constructor() { }

    ngOnInit() {
    }
}
