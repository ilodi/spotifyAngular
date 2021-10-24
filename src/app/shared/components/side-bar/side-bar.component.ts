import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  // linksMenu: Array<any> = [
  //   {
  //     name: 'Home',
  //     icon: 'uil-home',
  //   },
  //   {
  //     name: 'Buscar',
  //     icon: 'uil-search',
  //   },
  // ];

  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = { defaultOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  constructor(private router: Router) {}

  // Ciclo de vida Inicial
  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth'],
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { user: 'mundo' },
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      },
    ];

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/'],
      },
      {
        name: 'Mi lista º2',
        router: ['/'],
      },
      {
        name: 'Mi lista º3',
        router: ['/'],
      },
      {
        name: 'Mi lista º4',
        router: ['/'],
      },
    ];
  }
  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value',
        key2: 'value',
        key3: 'value',
      },
    });
    console.log($event);
    //URL con parametros solamente es igual a
    //http://localhost/param1/param2
    //URL con query parametros solamente
    //http://localhost/param?querry1=valor&query2=value3
  }
}
