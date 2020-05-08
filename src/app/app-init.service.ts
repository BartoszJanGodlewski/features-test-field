import { Injectable } from '@angular/core';

@Injectable()
export class AppInitService {
  constructor() {}

  Init() {
    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService Initialized');
      setTimeout(() => {
        console.log('AppInitService Finished');
        resolve();
      }, 1000);
    });
  }
}
