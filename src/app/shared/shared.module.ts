import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ContactService
  ]
})
export class SharedModule { }
