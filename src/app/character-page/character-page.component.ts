import { Component } from '@angular/core';
import { NavigatorService } from '../navigator.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent {
  isCard = true;

  constructor(
    private readonly navigator: NavigatorService
  ) {}

  onNewCharacter(){
    this.navigator.goCreateCharacterCard();
  }
}
