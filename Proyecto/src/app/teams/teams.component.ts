import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from "../team";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent {
  title = 'English League';
  teams: Team[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe((data: any[]) => {
      console.log(data);
      this.teams = data;
    })
  }
}
