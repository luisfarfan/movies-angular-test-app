import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [SimpleLayoutComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpleLayoutComponent, HeaderComponent]
})
export class LayoutModule {
}
