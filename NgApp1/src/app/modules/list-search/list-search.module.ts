import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSearchComponent } from './list-search.component';
import { BusyModule, BusyConfig } from 'angular2-busy';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListSearchComponent]
})
export class ListSearchModule { }
