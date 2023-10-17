import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-data-policy',
  templateUrl: './data-policy.component.html',
  styleUrls: ['./data-policy.component.scss']
})
export class DataPolicyComponent {
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      event.preventDefault();
      event.stopPropagation();
      // Perform the necessary action here
    }
  }
}