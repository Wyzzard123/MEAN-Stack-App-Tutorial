import { Injectable } from '@angular/core';
// Note: This is different in the tutorial.
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Updated import syntax for map: https://stackoverflow.com/questions/45516375/problems-with-maps-and-import-rxjs-add-operator-map
import {map} from 'rxjs/operators'
import {Video} from "./video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _getUrl = "http://localhost:3000/api/videos";
  private _postUrl = "http://localhost:3000/api/video";
  private _putUrl = "http://localhost:3000/api/video/"

  constructor(private _http: HttpClient) { }

  // Updated syntax for map: https://stackoverflow.com/questions/45516375/problems-with-maps-and-import-rxjs-add-operator-map
  getVideos() {
    // Automatically mapped to JSON now https://stackoverflow.com/questions/46630893/angular-res-json-is-not-a-function
    return this._http.get(this._getUrl);
  }
  // See requirements for making a post request in Angular: https://jasonwatmore.com/post/2019/11/21/angular-http-post-request-examples
  addVideo(video: Video) {
    return this._http.post(this._postUrl, video);
  }

  updateVideo(video: Video){
    return this._http.put(this._putUrl + video._id, video);
  }

}
