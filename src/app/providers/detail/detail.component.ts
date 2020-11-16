import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProviderService } from '../../shared/services/provider.service';
import { Provider } from '../../shared/types/provider';
import domtoimage from 'dom-to-image';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.styl']
})
export class DetailComponent implements OnInit {
  currProvider: Provider = null;
  providerId: number = null;

  @ViewChild("detail") node: ElementRef
  constructor(
    private service: ProviderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:Params) => {
      if(params.params.id) {
        this.providerId = params.params.id;
        this.getProviderData(this.providerId)
      }
    })
  }

  getProviderData(id: number) {
    this.service.getProviderById(id).subscribe((response: Provider) => {
      this.currProvider = response;
    });
  }
  download(){
    let node = this.node.nativeElement;
    domtoimage.toJpeg(node, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'download.jpg';
        link.href = dataUrl;
        link.click();
    });
  }
}
