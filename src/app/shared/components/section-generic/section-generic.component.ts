 import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.scss'],
})
export class SectionGenericComponent implements OnInit {
  @Input() title: String = '';
  // el igual es una forma de decir comienzas en este valor
  @Input() mode: 'small' | 'big' = 'big';
  //se pasaran como modo de entrada
  @Input() dataTracks: Array<TrackModel> = [];

  constructor() {}

  ngOnInit(): void {}
}
