import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent {
    // Funktion zum Scrollen nach unten
    scrollDown(): void {
      const scrollDistance = window.innerHeight / 1.5;
      
      window.scrollBy({
        top: scrollDistance,
        behavior: 'smooth'
      });
    }
  
    // Event-Listener, um das Scrollen zu überwachen und den Button auszublenden
    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
      const scrollDownButton = document.getElementById('scroll-down-button');
      
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight || window.innerWidth <= 800) {
        scrollDownButton!.style.display = "none";
      } else {
        scrollDownButton!.style.display = 'flex';
      }
    }
}
