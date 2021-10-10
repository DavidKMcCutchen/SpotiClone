import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-top-track',
  templateUrl: './artist-top-track.component.html',
  styleUrls: ['./artist-top-track.component.scss']
})
export class ArtistTopTrackComponent implements OnInit {
  @Input() topTrack: any;
  play: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  player(): void {
    this.play = !this.play;
    console.log('play:', this.play);
  }

}
