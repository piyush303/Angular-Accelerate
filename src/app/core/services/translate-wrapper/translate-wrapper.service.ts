import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

export enum Languages {
  En = 'en',
  Fr = 'fr'
}

@Injectable({
  providedIn: 'root'
})
export class TranslateWrapperService {

  constructor(private translate: TranslateService) { 
    console.log('TranslateWrapperService')
    this.translate.addLangs([Languages.En, Languages.Fr]);
    this.translate.setDefaultLang(Languages.En);

    const browserLang = this.translate.getBrowserLang();

    // If browserLang is null or undefined, set language to 'en'
    this.translate.use(browserLang ?? Languages.En);
  }

  get currentLang(): Languages {
    return this.translate.currentLang as Languages;
  }

  set currentLang(lang: Languages) {
    this.translate.currentLang = lang;
  }

  getLangs(): Array<Languages> {
    return this.translate.getLangs() as Array<Languages>;
  }
}
