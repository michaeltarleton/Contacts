import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './';
import { SettingsService } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ContactService,
    SettingsService
  ]
})
export class SharedModule { }
