import { ArtistModel } from './artist.model';

// modelo de dato que debe contener una cancion
export interface TrackModel {
  name: string;
  album: string;
  cover: string;
  url: string;
  _id: string | number;
  artist?: ArtistModel;
}
