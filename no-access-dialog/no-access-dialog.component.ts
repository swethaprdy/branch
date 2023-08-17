import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-no-access-dialog',
  templateUrl: './no-access-dialog.component.html',
  styleUrls: ['./no-access-dialog.component.css'],
})
export class NoAccessDialogComponent implements OnInit{
  constructor(
      public dialogRef: MatDialogRef<NoAccessDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: 'any'
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
