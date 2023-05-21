import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class NavigatorService {
   constructor(
      private readonly location: Location,
      private readonly router: Router
   ) {}

   goBack(): void {
      this.location.back();
   }

   goViewCharacterCard(): void {
    this.router.navigate(['/charachers/view-characher']);
   }
   
   goCreateCharacterCard(): void {
    this.router.navigate(['/charachers/create-character']);
   }

   goCharacterPage(): void {
      this.router.navigate(['/charachers'])
   }
}