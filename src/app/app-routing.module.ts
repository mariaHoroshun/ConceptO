import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ClassPageComponent } from './class-page/class-page.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CreatorInfoPageComponent } from './creator-info-page/creator-info-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuestPageComponent } from './quest-page/quest-page.component';
import { ViewCharacterModalComponent } from './modals/view-character-modal/view-character-modal.component';
import { CreateCharacterModalComponent } from './modals/create-character-modal/create-character-modal.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home',  component: HomePageComponent, pathMatch: 'full'},
  { path: 'login',  component: LoginPageComponent, pathMatch: 'full'},
  { path: 'classes',  component: ClassPageComponent, pathMatch: 'full'},
  { path: 'charachers',  component: CharacterPageComponent, pathMatch: 'prefix' , children: [
    {path: 'view-characher', component: ViewCharacterModalComponent, pathMatch: 'full'},
    {path: 'create-character', component: CreateCharacterModalComponent, pathMatch: 'full'}
  ]},
  { path: 'quests',  component: QuestPageComponent, pathMatch: 'full'},
  { path: 'creator',  component: CreatorInfoPageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
