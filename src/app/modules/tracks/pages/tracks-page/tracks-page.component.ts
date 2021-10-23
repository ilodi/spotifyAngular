import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss'],
})
export class TracksPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> = [];

  constructor() {}

  //en el primer ciclo de vida
  //el json lo manda como modulo
  //se debe de limpiar
  //como un any en su propiedad default
  ngOnInit(): void {
    //Desestructuración  objeto
    const { data }: any = (dataRaw as any).default;
    //se manda al componente
    this.mockTracksList = data;
  }
}
