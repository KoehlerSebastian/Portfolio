import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-only-for-training',
  templateUrl: './only-for-training.component.html',
  styleUrls: ['./only-for-training.component.scss']
})
export class OnlyForTrainingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  handleOverlayClick(event: any) {
    const policyElement = document.getElementById('train');
    if (policyElement) {
      const isClickInsideSection = policyElement.contains(event.target);
      const isCloseButtonClicked = (event.target.classList.contains('close-button'));

      if (!isClickInsideSection && !isCloseButtonClicked) {
        this.router.navigate(['/']); 
      }
    }
  }
}
