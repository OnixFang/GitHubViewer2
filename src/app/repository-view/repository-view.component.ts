import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { IRepository } from '../irepository';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-repository-view',
    templateUrl: './repository-view.component.html',
    styleUrls: ['./repository-view.component.css']
})
export class RepositoryViewComponent implements OnInit {
    repo: IRepository;

    constructor(
        private githubService: GithubService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        console.log(this.route.snapshot.paramMap.get('username'));
        console.log(this.route.snapshot.paramMap.get('reponame'));
        this.githubService.getRepo(this.route.snapshot.paramMap.get('username'), this.route.snapshot.paramMap.get('reponame')).subscribe(
            repo => this.repo = repo
        );
    }
}
