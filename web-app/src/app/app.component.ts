import { Component, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { MatMenuTrigger } from '@angular/material';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})

export class AppComponent{
  constructor(
  ) { }

  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

}

@Pipe({ name: 'safe' })
  export class SafePipe implements PipeTransform {

    constructor(
      private sanitizer: DomSanitizer
      ) {}

    transform(url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
