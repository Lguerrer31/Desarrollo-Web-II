import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { Team } from "../team";

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {

  team: any;
  players: any = [];
  last: any = [];
  next: any = [];
  table: any = [];

  constructor(private teamService: TeamService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.teamService.getTeam(params.get('id')).subscribe(c => {
        this.team = c["teams"][0];
      })
      this.teamService.getPlayers(params.get('id')).subscribe(players => {
        console.log(players)
        this.players = players;
      })
      this.teamService.getLastEvents(params.get('id')).subscribe(e => {
        this.last = e;
      })
      this.teamService.getNextEvents(params.get('id')).subscribe(e => {
        this.next = e;
      })
      this.teamService.getTable().subscribe(t => {
        this.table = t;
      })
    });


  }

}
