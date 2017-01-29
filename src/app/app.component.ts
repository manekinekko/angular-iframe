import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  unsafeIframeUrl = 'https://wassimchegham.com';
  safeIframeUrl = '#';

  constructor(public ds: DomSanitizer) {
  }

  ngOnInit() {
    this.setIframeUrl();
  }

  setIframeUrl() {
    this.safeIframeUrl = this.ds.bypassSecurityTrustResourceUrl(this.unsafeIframeUrl) as string;
  }

}
