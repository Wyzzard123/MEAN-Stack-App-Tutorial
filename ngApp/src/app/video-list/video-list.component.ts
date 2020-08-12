import { Component, OnInit } from '@angular/core';
import {Video} from "../video";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos']
})
export class VideoListComponent implements OnInit {
  // Tutorial does not do this, but you must declare 'videos' here.
  videos: Video[];

  constructor() { }

  ngOnInit(): void {
  }

}
