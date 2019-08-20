import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user: any = null;
  
  constructor(private httpClient: HttpClient) { }
  
  public Get(url: string) {
    return this.httpClient.get(url,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
      });
  }
  
  public GetById(id: any, url: string) {
    return this.httpClient.get(url + id,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
      });
  }
  
  public Create(data: any, url: string) {
    return this.httpClient.post(url, JSON.stringify(data),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
      });
  }
  
  public Edit(data: any, url: string) {
    return this.httpClient.put(url, JSON.stringify(data),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
      });
  }

  public Delete(id: any, url: string) {
    return this.httpClient.delete(url + id,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
      });
  }

  public Login(url: string, user: Login) {
    this.user = user;
    var data = 'username=' + user.Username + '&password=' + user.Password + '&grant_type=' + user.grant_type;
    var reqHeader = new HttpHeaders().set('Content-Type', 'application/x-www-urlencoded');
    return this.httpClient.post(url, data, { headers: reqHeader });
  }

  public Register(url: string, user: Register) {
    this.user = user;
    return this.httpClient.post(url, JSON.stringify(user),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }

  isLoggedIn() {
    if (this.user == null) {
      return false;
    }
    return true;
  }

  public Logout(url: string) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    var reqheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token'))
    });
    this.user = null;
    return this.httpClient.get(url, { headers: reqheaders });
  }

  public UniqueUsername(username: string, url: string){
    return this.httpClient.get(url + username);
  }
}
