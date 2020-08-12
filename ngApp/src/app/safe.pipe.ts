import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url:any) {
    // Replace watch?v= with embed/
    if (url.indexOf("watch?v=") != -1) {
      url = url.replace("watch?v=", "embed/");
    }
    // Returns a safer version of the URL.
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
