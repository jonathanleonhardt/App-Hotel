import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospede',
  templateUrl: './hospede.page.html',
  styleUrls: ['./hospede.page.scss'],
})
export class HospedePage implements OnInit {
  roomList;
  loggedUser;

  constructor(
    private service: SystemService,
    private router: Router
  ) {
    this.roomList = service.roomList;
    this.loggedUser = service.loggedUser;
  }

  async logout() {
    await this.service.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  ngOnInit() {
  }

  reserveRoom( room ) {
    this.service.reserveRoom(room.id);
    this.roomList = this.service.roomList;
  }


}
