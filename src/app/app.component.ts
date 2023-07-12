import { Component } from '@angular/core';
import { PasswordService } from './password.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  text = '';
  difficulty = '';
  result = ''
  constructor(private passwordService: PasswordService) { }
  checkString() {
    this.difficulty = this.passwordService.checkPasswordComplexity(this.text);


    switch (this.difficulty) {
      case '2':
        this.difficulty = 'medium';
        break;
      case '3':
        this.difficulty = 'hard';
        break;
      case '1':
        this.difficulty = 'easy';
    }
  }
}





