import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { ShardMeComponent } from './shard-me/shard-me.component';
import { ShardSiteComponent } from './shard-site/shard-site.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageResumeComponent } from './page-resume/page-resume.component';
import { PagePortfolioComponent } from './page-portfolio/page-portfolio.component';
import { PageProjectComponent } from './page-project/page-project.component';

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
        path: 'CV',
        component: PageResumeComponent,
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
