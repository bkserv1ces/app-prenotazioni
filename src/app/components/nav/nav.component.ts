import { Component } from '@angular/core';
import { LoginService } from '../../servizi/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  title = 'Bukaro Party';

  constructor(public logService : LoginService, private router : Router){}

  handleLogout() {
    this.logService.logout().subscribe({
      next : (data)=>{
        this.router.navigateByUrl("/BukaroParty");
      }
    })
  }
}
