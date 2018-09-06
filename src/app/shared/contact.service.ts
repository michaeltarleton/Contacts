import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ContactService {
  constructor() { }

  getContacts(): Observable<IContact[]> {
    return of(CONTACTS);
  }
}

export interface IContact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const CONTACTS: IContact[] = [
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  }
];
