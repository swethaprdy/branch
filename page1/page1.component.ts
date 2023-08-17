import { ActivatedRoute } from '@angular/router';
import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {MenuService} from "../shared/menu.service";

// ... (previous imports)

@Component({
selector: 'app-page1',
templateUrl: './page1.component.html',
styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnDestroy {
selectedMenu: string | undefined;
private menuSubscription: Subscription;

constructor(private route: ActivatedRoute, private menuService: MenuService) {
  this.menuSubscription = this.menuService.selectedMenu$.subscribe(menu => {
    this.selectedMenu = menu;
  console.log(this.selectedMenu)
  });
}

ngOnDestroy() {
  this.menuSubscription.unsubscribe();
}
}
