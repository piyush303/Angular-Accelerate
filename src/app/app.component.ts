import { Component, OnInit } from '@angular/core';
import { Languages, TranslateWrapperService } from './core/services/translate-wrapper/translate-wrapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-accelerator';
  languages: Array<Languages> | [] = [];

  constructor(public translate: TranslateWrapperService) {
  }

  ngOnInit() {
    this.languages = this.translate.getLangs();
  }
}
