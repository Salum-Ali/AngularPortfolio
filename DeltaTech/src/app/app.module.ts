import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, Directive, HostListener } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import ngx-twitter-timeline
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


// import { FragmentPolyfillModule } from './fragment-polyfill.module';

import { SocialFeedsComponent } from './section/global/social-feeds/social-feeds.component';
import { CoreNavbarComponent } from './section/global/core-navbar/core-navbar.component';
import { ResumeMainComponent } from './page/resume/resume-main/resume-main.component';
import { ProjectPastComponent } from './page/project/project-past/project-past.component';
import { ProjectPresentComponent } from './page/project/project-present/project-present.component';
import { ProjectFutureComponent } from './page/project/project-future/project-future.component';
import { ProjectOngoingComponent } from './page/project/project-ongoing/project-ongoing.component';
import { InfoMeComponent } from './page/info/info-me/info-me.component';
import { InfoSiteComponent } from './page/info/info-site/info-site.component';
import { SectionAdvertComponent } from './section/global/section-advert/section-advert.component';
import { ResumeArtComponent } from './page/resume/resume-art/resume-art.component';
import { ResumeAnimationComponent } from './page/resume/resume-animation/resume-animation.component';
import { ResumeCodeComponent } from './page/resume/resume-code/resume-code.component';
import { ResumeSculptingComponent } from './page/resume/resume-sculpting/resume-sculpting.component';
import { CoreTopComponent } from './section/global/core-top/core-top.component';
import { CoreBottomComponent } from './section/global/core-bottom/core-bottom.component';
import { ContactComponent } from './page/contact/contact.component';
import { MapComponent } from './page/map/map.component';
import { CreditComponent } from './page/credit/credit.component';
import { FootbarComponent } from './section/global/footbar/footbar.component';
import { MaintitleComponent } from './section/global/maintitle/maintitle.component';
import { MainblurbComponent } from './section/global/mainblurb/mainblurb.component';
import { HomeComponent } from './page/home/home.component';
import { NoneComponent } from './page/none/none.component';
import { ProjectComponent } from './page/project/project.component';
import { ResumeComponent } from './page/resume/resume.component';
import { InfoComponent } from './page/info/info.component';
import { BckpgComponent } from './section/global/button/bckpg/bckpg.component';
import { MottoComponent } from './section/global/footbar/motto/motto.component';
import { IconComponent } from './section/global/footbar/icon/icon.component';



@NgModule({
  declarations: [
    AppComponent,
    SocialFeedsComponent,
    CoreNavbarComponent,
    InfoComponent,
    ResumeMainComponent,
    ProjectPastComponent,
    ProjectPresentComponent,
    ProjectFutureComponent,
    ProjectOngoingComponent,
    InfoMeComponent,
    InfoSiteComponent,
    HomeComponent,
    ResumeComponent,
    ProjectComponent,
    SectionAdvertComponent,
    NoneComponent,
    ResumeArtComponent,
    ResumeAnimationComponent,
    ResumeCodeComponent,
    ResumeSculptingComponent,
    CoreTopComponent,
    CoreBottomComponent,
    ContactComponent,
    MapComponent,
    CreditComponent,
    FootbarComponent,
    MaintitleComponent,
    MainblurbComponent,
    HomeComponent,
    NoneComponent,
    ProjectComponent,
    ResumeComponent,
    InfoComponent,
    BckpgComponent,
    // ButtonComponent,
    BckpgComponent,
    MottoComponent,
    IconComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // Specify library as an import
    NgxTwitterTimelineModule.forRoot()
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

// @Component({
//   // ...
//   providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
// })
// export class AppComponent {
//   constructor(private location: Location) { }

//   // ...
// }
// Directive({
//   selector: '[backButton]'
// });
// export class BackButtonDirective {
//   constructor(private location: Location) { }

//   @HostListener('click')
//   onClick() {
//     this.location.back();
//     console.log('goBack()...');
//   }
// }
