import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authentificationService: AuthentificationService
  ) { }

  visibility = false;

  ngOnInit() {
  }
  isLogged() {
    this.authentificationService.isLogged();
  }
  logout() {
    this.authentificationService.logout();
  }
  show() {
    this.visibility = !this.visibility;
  }

}
