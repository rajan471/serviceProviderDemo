import { Component, Input, OnInit } from '@angular/core';
import { ProviderService } from '../../shared/services/provider.service';
import { Provider } from '../../shared/types/provider';
import { Router } from '@angular/router';
import { fromEvent, interval } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  providers: Provider[] = [];
  sortBy = "price";
  constructor(
    private service: ProviderService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getProviders();
  }
  trackById(index, provider) {
    return provider.id;
  }
  getProviders(q = "", sortBy = 'price') {
    this.sortBy = sortBy
    this.service.getProvidersList(q, sortBy).subscribe((response: Provider[]) => {
      this.providers = response;
      if (this.providers.length > 0 && window.location.pathname === "/") {
        this.router.navigate(["", this.providers[0].id])
      }
    })
  }
  search(e: any) {
    this.getProviders(e.target.value);
  }
  getData(id: number) {
    this.router.navigate(["", id])
  }

}
