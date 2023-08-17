import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuOptions: string[] = []; // Add menu options here
  private selectedMenuSubject = new BehaviorSubject<string>(this.menuOptions[0]);
  selectedMenu$ = this.selectedMenuSubject.asObservable();

  constructor() {
    if (this.menuOptions.length === 0) {
      console.warn('No menu options available. You do not have access to the application.');
    }
  }

  getMenuOptions(): string[] {
    return this.menuOptions;
  }

  setSelectedMenu(menu: string) {
    this.selectedMenuSubject.next(menu);
  }
}
