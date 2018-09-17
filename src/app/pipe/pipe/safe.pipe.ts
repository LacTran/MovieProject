import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private _domSanitizier: DomSanitizer){}
  transform(value: any): any {
    return this._domSanitizier.bypassSecurityTrustResourceUrl(value);
  }

}
