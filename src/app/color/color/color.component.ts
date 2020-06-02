import { Component, OnInit } from '@angular/core';
import { PremierService } from 'src/app/premier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {
  
  color = 'red';

  constructor(
    private premierService: PremierService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.color = params.default;
      }
    );
  }

  loggerMesData() {
    this.premierService.logger('test');
  }

  goToCv(){
  const link = ['cv'];
    this.router.navigate(link);
  }

  changeBgColor(input) {
    console.log(input.value);
    this.color = input.value;
    input.value = '';
  }

  processReq(message: any) {
    alert(message);
  }
}
