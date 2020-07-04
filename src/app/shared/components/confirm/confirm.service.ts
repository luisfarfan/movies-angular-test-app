import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from './confirm.component';

@Injectable()
export class ConfirmService {

  constructor(private matDialog: MatDialog) {
  }

  confirm(): Observable<boolean> {
    const dialogRef = this.matDialog.open(ConfirmComponent);
    return dialogRef.afterClosed();
  }
}
