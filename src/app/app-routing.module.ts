import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ClassPageComponent } from './class-page/class-page.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CreatorInfoPageComponent } from './creator-info-page/creator-info-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuestPageComponent } from './quest-page/quest-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home',  component: HomePageComponent, pathMatch: 'full'},
  { path: 'login',  component: LoginPageComponent, pathMatch: 'full'},
  { path: 'classes',  component: ClassPageComponent, pathMatch: 'full'},
  { path: 'charachers',  component: CharacterPageComponent, pathMatch: 'full'},
  { path: 'quests',  component: QuestPageComponent, pathMatch: 'full'},
  { path: 'creator',  component: CreatorInfoPageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
