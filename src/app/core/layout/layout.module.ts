import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [SimpleLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SimpleLayoutComponent, HeaderComponent]
})
export class LayoutModule {
}
