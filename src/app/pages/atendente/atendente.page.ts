import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { SystemService } from '../../services/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atendente',
  templateUrl: './atendente.page.html',
  styleUrls: ['./atendente.page.scss'],
})
export class AtendentePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  roomList;
  loggedUser;
  newRoom;

  constructor(
    private service: SystemService,
    private router: Router
  ) {
    this.roomList = service.roomList;
    this.loggedUser = service.loggedUser;
    this.newRoom = { id: 0,guestId: 0, type: 'casal', status: 'livre' };
  }

  async logout() {
    await this.service.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  ngOnInit() {
  }

  confirmReservedRoom( room ) {
    this.service.confirmReservedRoom( room.id );
  }

  handleNewRoomTypeChange(e) {
    this.newRoom.type = e.detail.value;
  }

  createNewRoom(){
    this.service.createNewRoom(this.newRoom);
    this.newRoom =  { id: 0,guestId: 0, type: 'casal', status: 'livre' };
  }

}
