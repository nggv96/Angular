import { Component, Input, OnInit } from '@angular/core';
import { IExperience } from 'src/app/shared/models/experience.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() experience: IExperience;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public booking(): void{
    this.router.navigate(['/booking']);
  }

}
