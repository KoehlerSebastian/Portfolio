
import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {



openProject(link:string){
  window.open(link , '_blank')
}
}
