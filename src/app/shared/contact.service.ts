import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) { }

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>('https://localhost:5001/contacts');
  }
}

export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}
