import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    name: '',
    album: 'string',
    cover:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/07/pokemon-unite-2414165.jpg',
    url: 'string',
    _id: 1,
  };
  constructor() {}

  ngOnInit(): void {}
}
