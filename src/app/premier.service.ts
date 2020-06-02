import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {

  constructor() { }
  data = [
    'data1',
    'data2',
    'data3',
    'data4'
  ]
  logger(data: any) {
    console.log(this.data);
    console.log(data);
  }
  addData(data: string) {
    this.data.push(data);
  }
}
