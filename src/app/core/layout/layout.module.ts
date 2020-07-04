import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SimpleLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FlexModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [SimpleLayoutComponent, HeaderComponent]
})
export class LayoutModule {
}
