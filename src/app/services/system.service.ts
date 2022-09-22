/* eslint-disable @typescript-eslint/prefer-for-of */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  token = '';
  userList: any[];
  roomList: any[];
  loggedUser: any;

  constructor() {
    this.loadUsers();
    this.loadRooms();
    this.loggedUser = null;
  }

  loadUsers() {
    this.userList = [
      { id: 1, name: 'jonathan leonhardt', email: 'jonathan@unisinos.br', password: 'abc321', role: 'atendente' },
      { id: 2, name: 'bruno scherer', email: 'bruno@unisinos.br', password: 'abc321', role: 'hospede' }
    ];
  }

  loadRooms() {
    this.roomList = [
      { id: 1, guestId: 0, type: 'casal', status: 'livre' },
      { id: 2, guestId: 0, type: 'solteiro', status: 'reservado' },
      { id: 3, guestId: 2, type: 'casal', status: 'confirmado' },
      // { id: 4, guestId: 0, type: 'casal', status: 'reservado' },
      // { id: 5, guestId: 0, type: 'solteiro', status: 'livre' },
    ];
  }

  login(credentials: { email; password }): string {
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].email === credentials.email
          && this.userList[i].password === credentials.password) {
        this.loggedUser = this.userList[i];
        return this.loggedUser.role;
      }
    }
    return null;
  }

  logout() {
    this.loggedUser = null;
  }

  reserveRoom( id ) {
    this.roomList.map(
      room => {
        if ( room.id === id && room.status === 'livre' ) {
          room.status = 'reservado';
          room.guestId = this.loggedUser.id;
        } else if ( room.id === id && room.status === 'reservado') {
          room.status = 'livre';
          room.guestId = 0;
        }
      }
    );
  }

  getNextRoomId(){
    let lastId = 0;
    this.roomList.map(
      room => {
        if (room.id > lastId ) {
          lastId = room.id;
        }
      }
    );
    return lastId + 1;
  }

  confirmReservedRoom( id ) {
    this.roomList.map(
      room => {
        if ( room.id === id && room.status === 'reservado' ) {
          room.status = 'confirmado';
        } else if ( room.id === id && room.status === 'confirmado') {
          room.status = 'livre';
        }
      }
    );
  }

  createNewRoom( room ) {
    room.id = this.getNextRoomId();
    this.roomList.push(room);
  }
}
