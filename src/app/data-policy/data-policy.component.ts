import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-policy',
  templateUrl: './data-policy.component.html',
  styleUrls: ['./data-policy.component.scss']
})
export class DataPolicyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  handleOverlayClick(event: any) {
    const policyElement = document.getElementById('policy');
    if (policyElement) {
      const isClickInsideSection = policyElement.contains(event.target);
      const isCloseButtonClicked = (event.target.classList.contains('close-button'));

      if (!isClickInsideSection && !isCloseButtonClicked) {
        this.router.navigate(['/']); 
      }
    }
  }
}