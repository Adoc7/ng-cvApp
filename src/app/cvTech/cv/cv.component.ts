import { Component, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { PremierService } from 'src/app/premier.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne [];
  selectedPersonne: Personne;
  constructor(
    private premierService: PremierService,
    private cvService: CvService
    ) { }

  ngOnInit(): any { 
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (error) => {
        alert('Probleme d\'accés à l\'api : les données affichées sont fake');
        console.log(error);
        this.personnes = this.cvService.getFakePersonnes();
      }
    );
      this.premierService.addData('data from cv component');
      this.premierService.logger(this.personnes);
  }

  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}