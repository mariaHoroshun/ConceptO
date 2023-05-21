import { Component } from '@angular/core';
import { NavigatorService } from '../navigator.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    private readonly navigator: NavigatorService
  ) {}

  onClose(): void {
    this.navigator.goBack();
  }
}
