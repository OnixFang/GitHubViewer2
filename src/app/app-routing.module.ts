import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import { RepositoryViewComponent } from './repository-view/repository-view.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
    { path: 'user-search', component: UserSearchComponent },
    { path: 'user/:username', component: UserViewComponent },
    { path: ':username/:reponame', component: RepositoryViewComponent },
    { path: '', redirectTo: 'user-search', pathMatch: 'full' },
    { path: '**', redirectTo: 'user-search', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
