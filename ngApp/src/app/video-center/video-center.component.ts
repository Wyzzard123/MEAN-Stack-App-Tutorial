import { Component, OnInit } from '@angular/core';
import {Video} from "../video";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  // This is taken as 'inputs' in the video list components.
  videos: Video[] = [
    {"_id": "1", "title": "Title 1", "url": "url 1", "description": "description 1"},
    {"_id": "2", "title": "Title 2", "url": "url 2", "description": "description 2"},
    {"_id": "3", "title": "Title 3", "url": "url 3", "description": "description 3"}
  ]

  selectedVideo: Video;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectVideo(video:any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
