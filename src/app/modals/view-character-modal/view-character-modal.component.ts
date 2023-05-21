import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { NavigatorService } from 'src/app/navigator.service';

@Component({
  selector: 'app-view-character-modal',
  templateUrl: './view-character-modal.component.html',
  styleUrls: ['./view-character-modal.component.scss']
})
export class ViewCharacterModalComponent implements AfterViewInit {

  @ViewChild(NzCarouselComponent, { static: false }) myCarousel?: NzCarouselComponent;


  //array = ['../../assets/page-images/gab-white.jpeg', '../../assets/page-images/gang.jpg', '../../assets/page-images/gab-blood.jpg'];
  array = ['../../assets/page-images/mock1.jpg', '../../assets/page-images/mock2.png', '../../assets/page-images/mock3.jpg'];

  constructor(
    private readonly navigator: NavigatorService
  ) {}

  ngAfterViewInit(): void {
    if(this.myCarousel != undefined) {
    setTimeout(() => { this.myCarousel?.carouselContents.setDirty(); }, 200);
  }
}

  onClose(): void {
    this.navigator.goCharacterPage();
  }
}
