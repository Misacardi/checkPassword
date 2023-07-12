import { Component } from '@angular/core';
import { PasswordService } from './password.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = '';
  difficulty = 'Enter your';
  constructor(private passwordService: PasswordService) {}
  checkString() {
    this.difficulty = this.passwordService.checkPasswordDifficulty(this.text);
  }
}
