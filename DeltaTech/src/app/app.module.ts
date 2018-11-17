import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, Directive, HostListener } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import ngx-twitter-timeline
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreNavbarComponent } from './section/core-navbar/core-navbar.component';
import { ResumeMainComponent } from './page/resume/resume-main/resume-main.component';
import { InfoMeComponent } from './page/info/info-me/info-me.component';
import { InfoSiteComponent } from './page/info/info-site/info-site.component';
import { SectionAdvertComponent } from './section/section-advert/section-advert.component';
import { ResumeArtComponent } from './page/resume/resume-art/resume-art.component';
import { ResumeAnimationComponent } from './page/resume/resume-animation/resume-animation.component';
import { ResumeCodeComponent } from './page/resume/resume-code/resume-code.component';
import { ResumeSculptingComponent } from './page/resume/resume-sculpting/resume-sculpting.component';
import { CoreTopComponent } from './section/core-top/core-top.component';
import { CoreBottomComponent } from './section/core-bottom/core-bottom.component';
import { ContactComponent } from './page/contact/contact.component';
import { MapComponent } from './page/map/map.component';
import { CreditComponent } from './page/credit/credit.component';
import { FootbarComponent } from './section/footbar/footbar.component';
import { MaintitleComponent } from './section/maintitle/maintitle.component';
import { MainblurbComponent } from './section/mainblurb/mainblurb.component';
import { HomeComponent } from './page/home/home.component';
import { NoneComponent } from './page/none/none.component';
import { ProjectComponent } from './page/project/project.component';
import { ResumeComponent } from './page/resume/resume.component';
import { InfoComponent } from './page/info/info.component';
import { BckpgComponent } from './section/button/bckpg/bckpg.component';
import { MottoComponent } from './section/footbar/motto/motto.component';
import { IconComponent } from './section/footbar/icon/icon.component';
import { PastComponent } from './page/project/past/past.component';
import { PresentComponent } from './page/project/present/present.component';
import { FutureComponent } from './page/project/future/future.component';
import { SocialComponent } from './section/feed/social/social.component';

// ^ Auto-Imported Modules for self-generated components ^


@NgModule({
	declarations: [
		AppComponent,
		CoreNavbarComponent,
		InfoComponent,
		ResumeMainComponent,
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
		PastComponent,
		PresentComponent,
		FutureComponent,
		SocialComponent,
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
