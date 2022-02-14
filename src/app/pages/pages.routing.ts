import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(x => x.HomeModule) },
      { path: 'test', loadChildren: () => import('./test1/test1.module').then(x => x.Test1Module) },
    ]
  },
];

export const PageRoutes = RouterModule.forChild(routes);
