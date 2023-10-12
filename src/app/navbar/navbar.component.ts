import { Component, Renderer2, ElementRef} from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;

  windowWidth!: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    // Abonnieren Sie das Resize-Ereignis des Fensters, um die Bildschirmbreite zu überwachen
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnInit() {
    this.windowWidth = window.innerWidth; // Aktuelle Bildschirmbreite beim Initialisieren speichern
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onResize() {
    this.windowWidth = window.innerWidth;
    if (this.isMenuOpen && this.windowWidth > 885) {
      this.isMenuOpen = false;
    }
  }

   // Add this function to close the menu when a link is clicked
   closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
