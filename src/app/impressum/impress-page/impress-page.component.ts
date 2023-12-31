import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impress-page',
  templateUrl: './impress-page.component.html',
  styleUrls: ['./impress-page.component.scss']
})
export class ImpressPageComponent {
  constructor(private router: Router) {}

  handleOverlayClick(event: any) {
    const policyElement = document.getElementById('impressum');
    if (policyElement) {
      const isClickInsideSection = policyElement.contains(event.target);
      const isCloseButtonClicked = (event.target.classList.contains('close-button'));

      if (!isClickInsideSection && !isCloseButtonClicked) {
        this.router.navigate(['/']); 
      }
    }
  }
}
