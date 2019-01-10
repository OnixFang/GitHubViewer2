import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { IRepository } from '../irepository';
import { ActivatedRoute } from '@angular/router';
import { IGitHubUser } from '../igit-hub-user';

@Component({
    selector: 'app-repository-view',
    templateUrl: './repository-view.component.html',
    styleUrls: ['./repository-view.component.css']
})
export class RepositoryViewComponent implements OnInit {
    repo: IRepository;
    contributors: IGitHubUser[];

    constructor(
        private githubService: GithubService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.githubService.getRepo(this.route.snapshot.paramMap.get('username'), this.route.snapshot.paramMap.get('reponame')).subscribe(
            (repo) => {
                this.repo = repo;
                this.githubService.getContributors(this.repo).subscribe(users => this.contributors = users);
                console.log(this.repo);
            }
        );
    }
}
