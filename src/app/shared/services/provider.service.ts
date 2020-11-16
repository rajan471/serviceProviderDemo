import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent, interval } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getProvidersList(search: string = '', sortBy: string = 'price') {
    return this.http.get(`/providers?q=${search}&sortBy=${sortBy}`);
  }
  getProviderById(id: number) {
    return this.http.get(`/providers/${id}`);
  }
  getCounts() {
    return this.http.get('/counts');
  }
}
