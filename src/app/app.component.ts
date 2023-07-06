import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  text = '';
  difficulty = '';
  result = 'Enter your password';

  checkString() {
    const hasLetters = /[a-zA-Z]/.test(this.text);
    const hasDigits = /\d/.test(this.text);
    const hasSymbols = /[\W_]/.test(this.text);

    if (!this.text.length) {
      this.difficulty = '';
      this.result = 'Enter your password';
      return;
    }

    if (this.text.length <= 7) {
      this.difficulty = 'more';
      this.result = 'Enter more characters';
      return;
    }


   
    const key = (hasLetters ? 1 : 0) + (hasDigits ? 1 : 0) + (hasSymbols ? 1 : 0);
    
    let level: string = '';

    switch (key) {
      case 2: level = 'medium'
      break
      case 3: level = 'hard'
      break;
      default: level = 'easy'
    }



    this.difficulty = level;
    this.result = level === 'hard' ? 'Strong password' : level === 'medium' ? 'Medium password' : 'Your password is too easy';
  }
}





