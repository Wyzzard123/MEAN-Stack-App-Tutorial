import { Injectable } from '@angular/core';
// Note: This is different in the tutorial.
import { HttpClient } from '@angular/common/http';
// Updated import syntax for map: https://stackoverflow.com/questions/45516375/problems-with-maps-and-import-rxjs-add-operator-map
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _getUrl = "http://localhost:3000/api/videos";
  constructor(private _http: HttpClient) { }

  // Updated syntax for map: https://stackoverflow.com/questions/45516375/problems-with-maps-and-import-rxjs-add-operator-map
  getVideos() {
    // Automatically mapped to JSON now https://stackoverflow.com/questions/46630893/angular-res-json-is-not-a-function
    return this._http.get(this._getUrl);
  }
}
