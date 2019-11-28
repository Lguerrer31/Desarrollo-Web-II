import {Injectable} from '@angular/core';
import {Team} from './team';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class TeamService {

  URL_TEAMS = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
  URL_TEAM = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=";
  URL_PLAYERS = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=";
  URL_LAST_EVENTS = "https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=";
  URL_NEXT_EVENTS = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=";
  URL_TABLE = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920";

  constructor(private httpClient: HttpClient) {
  }

  public getTeams(){
    return this.httpClient.get(this.URL_TEAMS);
  }

  public getTeam(id){
    return this.httpClient.get(this.URL_TEAM+""+id);
  }

  public getPlayers(id){
    return this.httpClient.get(this.URL_PLAYERS+""+id);
  }

  public getLastEvents(id){
    return this.httpClient.get(this.URL_LAST_EVENTS+""+id);
  }

  public getNextEvents(id){
    return this.httpClient.get(this.URL_NEXT_EVENTS+""+id);
  }

  public getTable(){
    return this.httpClient.get(this.URL_TABLE);
  }
}
