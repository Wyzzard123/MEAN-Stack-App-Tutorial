import { Component, OnInit } from '@angular/core';
import {Video} from "../video";

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {
  video: Video;
  editTitle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //When one navigates away from the video, editTitle becomes false again.
  ngOnChanges() {
    this.editTitle = false;
  }
  onTitleClick() {
    this.editTitle = true;
  }

}
