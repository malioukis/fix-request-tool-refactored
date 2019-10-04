import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Generic } from './request-fields.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GenericService {

  private readonly apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getGeneric(): Observable<Generic> {
    return this.http.get<Generic>(this.apiURL + '/generic');
  }
}
