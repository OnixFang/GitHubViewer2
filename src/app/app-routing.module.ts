import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
    { path: 'user-search', component: UserSearchComponent },
    { path: '', redirectTo: 'user-search', pathMatch: 'full' },
    { path: '**', redirectTo: 'user-search', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
