import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-track-item',
  templateUrl: './search-track-item.component.html',
  styleUrls: ['./search-track-item.component.scss']
})
export class SearchTrackItemComponent implements OnInit {
  @Input() track: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Navigates to Album

  navigate(track: any): void {
    console.log('id', track.album.id);
    this.router.navigate(['/album', track.album.id])
  }

}
