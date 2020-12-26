import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'tab-one',
        children: [{
          path: '',
          loadChildren: () => import('./tab-one/tab-one.module').then( m => m.TabOnePageModule)
        }]
      },
      {
        path: 'tab-two',
        children: [{
          path: '',
          loadChildren: () => import('./tab-two/tab-two.module').then( m => m.TabTwoPageModule)
        }]
      },
      {
        path: '',
        redirectTo: '/home/tabs/tab-one',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/tab-one',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
