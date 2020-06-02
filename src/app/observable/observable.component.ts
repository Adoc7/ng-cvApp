import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  
  monObservable: Observable<string>;
  mesImages = [
    'interior_0.png',
    'land_0.png',
    'land_1.jpg',
    'land_2.png',
    'man_0.jpg',
    'man_1.png',
    'man_2.png',
    'woman_0.jpg',
    'woman_1.jpg'
  ];
  currentImage: string;
  constructor() { }
  
  ngOnInit(): void {
    this.monObservable = new Observable (
      (observer) => {
        let i = this.mesImages.length -1;
        setInterval(
          () => {
            observer.next(this.mesImages[i]);
            if (i > 0){
              i--
            }else{
              i =  this.mesImages.length -1;
            }
          }
        ,500);
      }
    );
    this.monObservable.subscribe (
      (result) => {
        console.log(result);
        this.currentImage = result;
      }
    );
  }
}
