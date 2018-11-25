import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NewComponent} from './new/new.component';
import {CardComponent} from './card/card.component';

const appRoutes: Routes = [
  {path: '', component: CardComponent},
  {path: 'new', component: NewComponent},
  {path: ':success', component: CardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
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
