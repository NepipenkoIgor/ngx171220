import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'backoffice'
  },
  {
    path: 'login',
    loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./content/backoffice/backoffice.module').then((m) => m.BackofficeModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'backoffice'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
