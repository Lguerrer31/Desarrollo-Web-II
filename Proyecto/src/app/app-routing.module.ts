import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'team-profile/:id', component: TeamProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
