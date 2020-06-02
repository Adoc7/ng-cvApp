import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  chaine = '';
  searchResult: Personne [];

  constructor(
    private cvservice: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchResult = [];
  }
  search() {
    const name = this.chaine.trim();
    if (name.length) {
      this.cvservice.findByName(name).subscribe(
        (personnes) => {
          console.log(personnes);
            this.searchResult = personnes;
          }    
        );
    } else {
      this.searchResult = [];
    }
  }

  selectPersonne(personne: Personne) {
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.searchResult = [];
    this.chaine = '';
  }

}
