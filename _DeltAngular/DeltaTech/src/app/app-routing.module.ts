import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeednavComponent } from './feednav/feednav.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: 'feednav',
    component: FeednavComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
