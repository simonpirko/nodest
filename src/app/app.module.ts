import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NewComponent} from './new/new.component';
import {CardComponent} from './card/card.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: CardComponent},
  {path: 'new', component: NewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
