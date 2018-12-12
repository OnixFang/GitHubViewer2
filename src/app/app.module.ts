import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GitHubUserViewComponent } from './git-hub-user-view/git-hub-user-view.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';

@NgModule({
    declarations: [
        AppComponent,
        GitHubUserViewComponent,
        RepositoryListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
