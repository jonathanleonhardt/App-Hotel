/* eslint-disable @typescript-eslint/prefer-for-of */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  token = '';
  userList: any[];
  roomList: any[];
  loggedUser: any;

  constructor(private http: HttpClient) {
    this.loadUsers();
    this.loadRooms();
    this.loggedUser = null;
  }

  loadUsers() {
    this.userList = [
      { id: 1, name: 'jonathan leonhardt', email: 'jonathan@unisinos.br', password: 'abc321', perfil: 'atendente' },
      { id: 2, name: 'bruno scherer', email: 'bruno@unisinos.br', password: 'abc321', perfil: 'hospede' }
    ];
  }

  loadRooms() {
    this.roomList = [
      { id: 1, hostageId: 0 },
      { id: 2, hostageId: 0 },
      { id: 3, hostageId: 2 },
      { id: 4, hostageId: 0 },
      { id: 5, hostageId: 0 },
    ];
  }

  login(credentials: { email; password }): boolean {
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].email === credentials.email
          && this.userList[i].password === credentials.password) {
        this.loggedUser = this.userList[i];
        return true;
      }
    }
    return false;
  }

  logout() {
    this.loggedUser = null;
  }
}
