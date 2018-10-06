import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAboutComponent } from './page/page-about/page-about.component';
// import { ShardMeComponent } from './shard-me/shard-me.component';
// import { ShardSiteComponent } from './shard-site/shard-site.component';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageResumeComponent } from './page/page-resume/page-resume.component';
import { PagePortfolioComponent } from './page/page-portfolio/page-portfolio.component';
import { PageProjectComponent } from './page/page-project/page-project.component';
import { ResumeMainComponent } from './page/page-resume/resume-main/resume-main.component';
import { ProjectPastComponent } from './page/page-project/project-past/project-past.component';
import { ProjectPresentComponent } from './page/page-project/project-present/project-present.component';
import { ProjectOngoingComponent } from './page/page-project/project-ongoing/project-ongoing.component';
import { ProjectFutureComponent } from './page/page-project/project-future/project-future.component';
import { PageNoneComponent } from './page/page-none/page-none.component';
import { componentFactoryName } from '@angular/compiler';
import { ResumeAnimationComponent } from './page/page-resume/resume-animation/resume-animation.component';
import { ResumeArtComponent } from './page/page-resume/resume-art/resume-art.component';
import { ResumeCodeComponent } from './page/page-resume/resume-code/resume-code.component';
import { ResumeSculptingComponent } from './page/page-resume/resume-sculpting/resume-sculpting.component';
import { InfoMeComponent } from './page/page-about/info-me/info-me.component';
import { InfoSiteComponent } from './page/page-about/info-site/info-site.component';
import { CreditComponent } from './page/credit/credit.component';
import { MapComponent } from './page/map/map.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: PageHomeComponent,
    },
    {
        path: 'info',
        component: PageAboutComponent,
        children: [
            {
                path: '',
                redirectTo: 'me',
                pathMatch: 'full'
            },
            {
                path: 'me',
                component: InfoMeComponent
            },
            {
                path: 'site',
                component: InfoSiteComponent
            }
        ]
    },
    // ^ infos ^
    {
        path: 'cv',
        component: PageResumeComponent,
        children: [
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            },
            {
                path: 'main',
                component: ResumeMainComponent
            },
            {
                path: 'modelling',
                component: ResumeSculptingComponent
            },
            // tempname?
            {
                path: 'animating',
                component: ResumeAnimationComponent
            },
            {
                path: 'painting',
                component: ResumeArtComponent
            },
            // tempname
            {
                path: 'scripting',
                component: ResumeCodeComponent
            }
            // tempname?
        ]
    },
    // ^ resumes ^
    {
        path: 'projects',
        component: PageProjectComponent,
        children: [
            {
                path: '',
                redirectTo: 'present',
                pathMatch: 'full'
            },
            {
                path: 'past',
                component: ProjectPastComponent
            },
            {
                path: 'present',
                component: ProjectPresentComponent
            },
            {
                path: 'future',
                component: ProjectFutureComponent
            },
            {
                path: 'ongoing',
                component: ProjectOngoingComponent
            }
        ]
    },
    // ^ projects ^
    {
        path: 'credits',
        component: CreditComponent,
    },
    {
        path: 'maps',
        component: MapComponent,
    },
    // ^ maps ^
    {
        path: 'credits',
        component: MapComponent
    },
    // ^ credits ^
    {
        path: '**',
        component: PageNoneComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
