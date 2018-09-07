import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { tap, map, flatMap } from 'rxjs/operators';

import { SettingsService } from './settings.service';

@Injectable()
export class ContactService {
  constructor(private http: HttpClient, private settingsService: SettingsService) { }

  getContacts(): Observable<IContact[]> {
    return this.settingsService.settings$.pipe(
      map(s => this.http.get<IContact[]>([s.contactServiceUrl, '/contacts'].join(''))),
      flatMap(s => s),
      tap(console.log)
    );
  }
}

export interface IContact {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
}
