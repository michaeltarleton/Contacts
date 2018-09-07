import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class SettingsService {
  private cache: any;

  constructor(private http: HttpClient) { }

  get settings$(): Observable<any> {

    if (!environment.production) {
      return of(environment);
    }

    if (this.cache) {
      return of(this.cache);
    }

    return this.http.get<any>('/settings');
  }
}
