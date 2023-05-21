import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CreatorInfoPageComponent } from './creator-info-page/creator-info-page.component';
import { ClassPageComponent } from './class-page/class-page.component';
import { QuestPageComponent } from './quest-page/quest-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { ContentInlineComponent } from './components/content-inline/content-inline.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ViewCharacterModalComponent } from './modals/view-character-modal/view-character-modal.component';
import { CreateCharacterModalComponent } from './modals/create-character-modal/create-character-modal.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CharacterPageComponent,
    CreatorInfoPageComponent,
    ClassPageComponent,
    QuestPageComponent,
    LoginPageComponent,
    HomePageComponent,
    ContentCardComponent,
    ContentInlineComponent,
    ViewCharacterModalComponent,
    CreateCharacterModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCarouselModule,
    NzGridModule,
    NzSwitchModule,
    NzCardModule,
    NzModalModule,
    NzMessageModule,
    NzCheckboxModule,
    NzButtonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
