import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact.service';
import { ContactResolver } from './resolvers';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ContactService,
    ContactResolver
  ]
})
export class SharedModule { }
