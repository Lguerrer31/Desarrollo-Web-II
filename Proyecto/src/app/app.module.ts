import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatProgressSpinnerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import {TeamService} from "./team.service";
import { TeamCardComponent } from './team-card/team-card.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamCardComponent,
    TeamProfileComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
