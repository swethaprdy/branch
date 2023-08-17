import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MenuService} from "../shared/menu.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NoAccessDialogComponent} from "../no-access-dialog/no-access-dialog.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  selectedMenu: string | undefined;
// version-1
  // constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //     this.selectedMenu = params['menu'];
  //   });
  // }
  //
  // onMenuItemClick(option: string) {
  //   this.selectedMenu = option;
  //   this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { menu: this.selectedMenu } });
  // }


  // Version2 constructor(private menuService: MenuService) {
  //   this.menuService.selectedMenu$.subscribe((menu: string | undefined) => {
  //     this.selectedMenu = menu;
  //   });
  // }
  //
  // onMenuItemClick(option: string) {
  //   this.menuService.setSelectedMenu(option);
  // }
  //
  // version 3 menuOptions: string[]=[];
  //
  //
  // constructor(private menuService: MenuService) {}
  //
  // ngOnInit() {
  //   this.menuOptions = this.menuService.getMenuOptions();
  //   if (this.menuOptions && this.menuOptions.length > 0) {
  //     this.selectedMenu = this.menuOptions[0];
  //     this.menuService.setSelectedMenu(this.selectedMenu);
  //   }
  // }
  //
  // onMenuItemClick(option: string) {
  //   this.menuService.setSelectedMenu(option);
  // }

  menuOptions: string[] = [];


  constructor(private menuService: MenuService, public dialog: MatDialog) {
  }

  onMenuItemClick(option: string) {
    if (this.menuOptions && this.menuOptions.length > 0) {
      this.menuService.setSelectedMenu(option);
    }
  }

  openNoAccessDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; // Disable the ability to close the dialog by clicking outside
    dialogConfig.width = '250px';

    this.dialog.open(NoAccessDialogComponent, dialogConfig);
  }


  ngOnInit(): void {
    this.menuOptions = this.menuService.getMenuOptions();
    if (this.menuOptions.length === 0) {
      this.openNoAccessDialog();
    } else {
      this.selectedMenu = this.menuOptions[0];
      this.menuService.setSelectedMenu(this.selectedMenu);
    }
  }

}

