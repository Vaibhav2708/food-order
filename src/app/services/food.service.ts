import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllImages():string[]{
    return [
      '/assets/1.jfif',
      '/assets/2.jfif',
      '/assets/3.jfif',
      '/assets/3.jfif',
      '/assets/5.jfif',
      '/assets/6.jfif',
      '/assets/7.jfif',
      '/assets/8.jfif',
    ]
  }
}
