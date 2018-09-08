import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SocialFeedsComponent } from './social-feeds/social-feeds.component';
import { CoreNavbarComponent } from './core-navbar/core-navbar.component';
import { SectionTopComponent } from './section-top/section-top.component';
import { SectionBottomComponent } from './section-bottom/section-bottom.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { ShardMeComponent } from './shard-me/shard-me.component';
import { ShardSiteComponent } from './shard-site/shard-site.component';

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
    ShardSiteComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    // Specify library as an import
    // NgxTwitterTimelineModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
