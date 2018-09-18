import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { ShardMeComponent } from './shard-me/shard-me.component';
import { ShardSiteComponent } from './shard-site/shard-site.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageResumeComponent } from './page-resume/page-resume.component';
import { PagePortfolioComponent } from './page-portfolio/page-portfolio.component';
import { PageProjectComponent } from './page-project/page-project.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';
import { ResumeGamedevComponent } from './resume-gamedev/resume-gamedev.component';
import { ProjectPastComponent } from './project-past/project-past.component';
import { ProjectPresentComponent } from './project-present/project-present.component';
import { ProjectOngoingComponent } from './project-ongoing/project-ongoing.component';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
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
                component: ShardMeComponent
            },
            {
                path: 'site',
                component: ShardSiteComponent
            }
        ]
    },
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
                path: 'game',
                component: ResumeGamedevComponent
            }
        ]
    },
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
                component: ProjectPresentComponent
            },
            {
                path: 'ongoing',
                component: ProjectOngoingComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
