import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ButtonSciFiComponent } from '../../shared/components/button-sci-fi/button-sci-fi.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ButtonSciFiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent implements OnInit, OnDestroy {
  phrases = [
    "Building clean, fast and accessible interfaces...",
    "Creando interfaces limpias, rápidas y accesibles...",
    "Pptimizing UX with modern Angular patterns...",
    "Optimizando la UX con patrones modernos en Angular...",
    "Shaping minimal, futuristic UI systems...",
    "Diseñando sistemas UI minimalistas y futuristas..."
  ];
  currentText = signal('');

  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;
  private isBrowser: boolean;

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.timeoutId = setTimeout(() => this.typeEffect(), 400); // initial delay 400ms
    } else {
      this.currentText.set(this.phrases[0]); // fallback for SSR
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typeEffect() {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.currentText.set(currentPhrase.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.currentText.set(currentPhrase.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let typeSpeed = 50 + Math.random() * 20; // 50-70ms per char

    if (this.isDeleting) {
      typeSpeed /= 2; // Delete faster
    }

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      // Pause at end of phrase
      typeSpeed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      // Pause before starting new phrase
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      typeSpeed = 500;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), typeSpeed);
    this.cdr.markForCheck();
  }
}

