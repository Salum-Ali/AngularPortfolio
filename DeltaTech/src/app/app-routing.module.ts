import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { ShardMeComponent } from './shard-me/shard-me.component';
import { ShardSiteComponent } from './shard-site/shard-site.component';

const routes: Routes = [
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
