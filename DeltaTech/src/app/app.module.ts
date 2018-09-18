import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { FragmentPolyfillModule } from './fragment-polyfill.module';

import { SocialFeedsComponent } from './social-feeds/social-feeds.component';
import { CoreNavbarComponent } from './core-navbar/core-navbar.component';
import { SectionTopComponent } from './section-top/section-top.component';
import { SectionBottomComponent } from './section-bottom/section-bottom.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { ShardMeComponent } from './shard-me/shard-me.component';
import { ShardSiteComponent } from './shard-site/shard-site.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';
import { ProjectPastComponent } from './project-past/project-past.component';
import { ProjectPresentComponent } from './project-present/project-present.component';
import { ProjectFutureComponent } from './project-future/project-future.component';
import { ProjectOngoingComponent } from './project-ongoing/project-ongoing.component';
import { InfoMeComponent } from './info-me/info-me.component';
import { InfoSiteComponent } from './info-site/info-site.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageResumeComponent } from './page-resume/page-resume.component';
import { PagePortfolioComponent } from './page-portfolio/page-portfolio.component';
import { PageProjectComponent } from './page-project/page-project.component';
import { ResumeGamedevComponent } from './resume-gamedev/resume-gamedev.component';

// Import ngx-twitter-timeline
// import { NgxTwitterTimelineComponent } from './node_modules/ngx-twitter-timeline';

@NgModule({
  declarations: [
    AppComponent,
    SocialFeedsComponent,
    CoreNavbarComponent,
    SectionTopComponent,
    SectionBottomComponent,
    PageAboutComponent,
    ShardMeComponent,
    ShardSiteComponent,
    ResumeMainComponent,
    ProjectPastComponent,
    ProjectPresentComponent,
    ProjectFutureComponent,
    ProjectOngoingComponent,
    InfoMeComponent,
    InfoSiteComponent,
    PageHomeComponent,
    PageResumeComponent,
    PagePortfolioComponent,
    PageProjectComponent,
    ResumeGamedevComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    // FragmentPolyfillModule.forRoot({
    //   smooth: true
    // })
    // Specify library as an import
    // NgxTwitterTimelineModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
