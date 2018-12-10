import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubUserViewComponent } from './git-hub-user-view.component';

describe('GitHubUserViewComponent', () => {
  let component: GitHubUserViewComponent;
  let fixture: ComponentFixture<GitHubUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
