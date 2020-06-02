import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvservice: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.cvservice.getPersonneById(params.id).subscribe(
          (personne) => {
            this.personne = personne;    
          }
        );
      }
    );
  }
  updatePersonne() {
    this.cvservice.updatePersonne(this.personne).subscribe(
      (reponse) => {
        const link = ['cv'];
        this.router.navigate(link);
      }
    );
  }

}
