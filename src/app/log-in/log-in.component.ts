import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private router: Router){}
  enterUser(){
    console.log(this.username);
    if (this.username === 'user' && this.password === 'hardpassword') {
      localStorage.setItem('user', this.username);
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
