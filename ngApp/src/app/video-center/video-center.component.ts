import { Component, OnInit } from '@angular/core';
import {Video} from "../video";
import {VideoService} from "../video.service";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {
  // This is taken as 'inputs' in the video list components.
  videos: any; //Array<Video>;

  selectedVideo: any; //Video;

  //By default, hide the form responsible for adding the new video
  hideNewVideo: boolean = true;
  constructor(private _videoService: VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData
      )

  }

  onSelectVideo(video:any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
    // Hide the add new video button
    this.hideNewVideo = true;
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.selectedVideo = resNewVideo;
        this.hideNewVideo = true;
      })
  }

  newVideo(){
    this.hideNewVideo = false;
  }

  onUpdateVideoEvent(video: any) {
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);
    // Clear out the detail view.
    this.selectedVideo =null;
  }
}
