import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './page/info/info.component';
import { HomeComponent } from './page/home/home.component';
import { ResumeComponent } from './page/resume/resume.component';
import { ProjectComponent } from './page/project/project.component';
import { ResumeMainComponent } from './page/resume/resume-main/resume-main.component';
import { ProjectPastComponent } from './page/project/project-past/project-past.component';
import { ProjectPresentComponent } from './page/project/project-present/project-present.component';
import { ProjectOngoingComponent } from './page/project/project-ongoing/project-ongoing.component';
import { ProjectFutureComponent } from './page/project/project-future/project-future.component';
import { NoneComponent } from './page/none/none.component';
import { componentFactoryName } from '@angular/compiler';
import { ResumeAnimationComponent } from './page/resume/resume-animation/resume-animation.component';
import { ResumeArtComponent } from './page/resume/resume-art/resume-art.component';
import { ResumeCodeComponent } from './page/resume/resume-code/resume-code.component';
import { ResumeSculptingComponent } from './page/resume/resume-sculpting/resume-sculpting.component';
import { InfoMeComponent } from './page/info/info-me/info-me.component';
import { InfoSiteComponent } from './page/info/info-site/info-site.component';
import { CreditComponent } from './page/credit/credit.component';
import { ContactComponent } from './page/contact/contact.component';
import { MapComponent } from './page/map/map.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'info',
        component: InfoComponent,
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
        component: ResumeComponent,
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
        component: ProjectComponent,
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
        path: 'contacts',
        component: ContactComponent,
    },
    {
        path: 'maps',
        component: MapComponent,
    },
    // ^ maps ^
    {
        path: 'credits',
        component: CreditComponent
    },
    // ^ credits ^
    {
        path: '**',
        component: NoneComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
