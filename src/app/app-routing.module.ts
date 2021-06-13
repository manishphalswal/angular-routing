import { MessageFormComponent } from './components/message-form/message-form/message-form.component';
import { UsersResolveGuard } from './guards/dataresolve/users-resolve.guard';
import { NavigateAwayGuard } from './guards/navigation/navigate-away.guard';
import { PlaceholderComponent } from './components/users/placeholder/placeholder.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "blog", component: BlogComponent, canActivate: [ AuthGuard ] },
  { path: "about", component: AboutComponent },
  { path: "users", component: UsersComponent, canActivateChild: [ AuthGuard ], pathMatch: "prefix", 
  resolve: { users: UsersResolveGuard},
  children: [
    {path: ":id", component: UserDetailComponent}
    //, {path: "", component: PlaceholderComponent}
  ] },
  { path: "message", component: MessageFormComponent, canDeactivate: [ NavigateAwayGuard ] },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, NavigateAwayGuard, UsersResolveGuard]
})
export class AppRoutingModule { }
