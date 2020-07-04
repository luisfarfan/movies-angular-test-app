import { NgModule } from '@angular/core';
import { ConfirmComponent } from './confirm.component';
import { ConfirmService } from './confirm.service';
import { SharedModule } from '../../shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ConfirmComponent],
  imports: [
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [ConfirmComponent],
  providers: [ConfirmService]
})
export class ConfirmModule {
}
