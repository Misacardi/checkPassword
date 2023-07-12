import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  checkPasswordDifficulty(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[\W_]/.test(password);

    if (!password.length) {
      return 'Enter your';
    }

    if (password.length <= 7) {
      return 'Enter more characters for';
    }

    const key =
      (hasLetters ? 1 : 0) + (hasDigits ? 1 : 0) + (hasSymbols ? 1 : 0);

    return key === 1 ? 'easy' : key === 2 ? 'medium' : 'hard';
  }
}
