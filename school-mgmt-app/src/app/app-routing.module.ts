import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeachersComponent } from './home/modules/teachers/teachers.component';
import { MyProfileComponent } from './home/modules/my-profile/my-profile.component';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: HomeComponent, children : [
    { path: 'classes', loadChildren: () => import('./home/modules/classes/classes.module').then(m => m.ClassesModule) },
    { path: 'teachers', component: TeachersComponent },
    { path: 'my-profile', component: MyProfileComponent }
  ] },
  
 // { path: 'siteconfig', loadChildren: () => import('./config/modules/siteconfig/siteconfig.module').then(m => m.SiteconfigModule) }
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
