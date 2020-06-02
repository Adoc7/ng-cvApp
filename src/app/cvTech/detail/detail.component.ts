import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvservice: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
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
  deletePersonne(){
    this.cvservice.deletePersonne(this.personne.id).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updatePersonne(id: number) {
    const link = ['cv/updateCv', id];
    this.router.navigate(link);
  }
}