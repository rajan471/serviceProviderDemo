import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  apiHits = 0;
  ispCount = 0;

  constructor(private service: ProviderService) { }

  ngOnInit(): void {
    this.getData()
    // polling but socket can also be implemented
    setInterval(() => {
      this.getData()
    }, 1000) // keeping 1s for quick update
  }
  getData() {
    this.service.getCounts().subscribe((response: any) => {
      this.apiHits = response.apiHits
      this.ispCount = response.ispCount
    })
  }

}
