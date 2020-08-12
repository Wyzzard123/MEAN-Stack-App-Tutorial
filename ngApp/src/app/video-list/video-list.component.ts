import { Component, OnInit, EventEmitter } from '@angular/core';
import {Video} from "../video";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {
  // Tutorial does not do this, but you must declare 'videos' here.
  videos: Video[];
  public SelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

}
