import { Component } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  array = ['../../assets/page-images/mock1.jpg', '../../assets/page-images/mock2.png', '../../assets/page-images/mock3.jpg'];
}
