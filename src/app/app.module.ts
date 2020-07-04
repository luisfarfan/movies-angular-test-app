import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  NgxMatDateAdapter,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateAdapter, NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/movie-page/movie-page.module').then(m => m.MoviePageModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
