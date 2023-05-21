import { Component } from '@angular/core';
import { NavigatorService } from 'src/app/navigator.service';

@Component({
  selector: 'app-create-character-modal',
  templateUrl: './create-character-modal.component.html',
  styleUrls: ['./create-character-modal.component.scss']
})
export class CreateCharacterModalComponent {

  constructor(
    private readonly navigator: NavigatorService
  ) {}

  onClose(): void {
    this.navigator.goCharacterPage();
  }
}
