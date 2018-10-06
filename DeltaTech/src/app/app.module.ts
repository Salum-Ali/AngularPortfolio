import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { FragmentPolyfillModule } from './fragment-polyfill.module';

import { SocialFeedsComponent } from './section/global/social-feeds/social-feeds.component';
import { CoreNavbarComponent } from './section/global/core-navbar/core-navbar.component';
import { SectionTopComponent } from './section-top/section-top.component';
import { SectionBottomComponent } from './section-bottom/section-bottom.component';
import { PageAboutComponent } from './page/page-about/page-about.component';
import { ResumeMainComponent } from './page/page-resume/resume-main/resume-main.component';
import { ProjectPastComponent } from './page/page-project/project-past/project-past.component';
import { ProjectPresentComponent } from './page/page-project/project-present/project-present.component';
import { ProjectFutureComponent } from './page/page-project/project-future/project-future.component';
import { ProjectOngoingComponent } from './page/page-project/project-ongoing/project-ongoing.component';
import { InfoMeComponent } from './page/page-about/info-me/info-me.component';
import { InfoSiteComponent } from './page/page-about/info-site/info-site.component';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageResumeComponent } from './page/page-resume/page-resume.component';
import { PagePortfolioComponent } from './page/page-portfolio/page-portfolio.component';
import { PageProjectComponent } from './page/page-project/page-project.component';
import { SectionAdvertComponent } from './section/global/section-advert/section-advert.component';
import { PageNoneComponent } from './page/page-none/page-none.component';
import { ResumeArtComponent } from './page/page-resume/resume-art/resume-art.component';
import { ResumeAnimationComponent } from './page/page-resume/resume-animation/resume-animation.component';
import { ResumeCodeComponent } from './page/page-resume/resume-code/resume-code.component';
import { ResumeSculptingComponent } from './page/page-resume/resume-sculpting/resume-sculpting.component';
import { CoreTopComponent } from './section/global/core-top/core-top.component';
import { CoreBottomComponent } from './section/global/core-bottom/core-bottom.component';

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
    // InfoMeComponent,
    // InfoSiteComponent,
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
    SectionAdvertComponent,
    PageNoneComponent,
    ResumeArtComponent,
    ResumeAnimationComponent,
    ResumeCodeComponent,
    ResumeSculptingComponent,
    CoreTopComponent,
    CoreBottomComponent,
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
