import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BusyModule, BusyConfig } from 'angular2-busy';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// UI Router setup
import { UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { routerConfigFn } from './router.config';

import { AppComponent } from './app.component';
import { ListSearchModule } from './modules/list-search/list-search.module';
//import { SelectBoxComponent } from './modules/select-box/select-box.component';
//import { ComplexSearchBoxComponent } from './modules/complex-search-box/complex-search-box.component';
//import { SearchBoxComponent } from './modules/search-box/search-box.component';
//import { StatusResultListComponent } from './modules/status-result-list/status-result-list.component';
//import { ResultDetailComponent } from './modules/result-detail/result-detail.component';

import { ListSearchComponent, ResultDetailComponent } from "./modules/list-search";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BusyModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: { state: 'main' },
      config: routerConfigFn,
    }),
    BrowserModule,
    ListSearchModule,
    NgbModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule { }
