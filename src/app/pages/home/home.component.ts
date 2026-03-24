import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ButtonSciFiComponent } from '../../shared/components/button-sci-fi/button-sci-fi.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollTopBtnComponent } from '../../shared/components/scroll-top-btn/scroll-top-btn.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ButtonSciFiComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    ScrollTopBtnComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent implements OnInit, OnDestroy {
  phrases = [
    "Building clean, fast and accessible interfaces...",
    "Creando interfaces limpias, rápidas y accesibles...",
    "Optimizing UX with modern Angular patterns...",
    "Optimizando la UX con patrones modernos en Angular...",
    "Shaping minimal, futuristic UI systems...",
    "Diseñando sistemas UI minimalistas y futuristas..."
  ];
  currentText = signal('');

  // Parallax signals (Background)
  gridTransform = signal('perspective(600px) rotateX(60deg) translateY(-50px) scale(2.5)');
  orbsTransform = signal('translateY(0px)');

  // Parallax signals (UI Foreground)
  heroPanelTransform = signal('translateY(0px)');
  nameTransform = signal('translateY(0px)');
  titleTransform = signal('translateY(0px)');
  descTransform = signal('translateY(0px)');
  typewriterTransform = signal('translateY(0px)');
  ctaTransform = signal('translateY(0px)');

  // Hover Tilt Signal
  tiltTransform = signal('rotateX(0deg) rotateY(0deg)');

  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;
  private isBrowser: boolean;

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isBrowser) return;
    const scrollY = window.scrollY;

    // Background Parallax
    this.gridTransform.set(`perspective(600px) rotateX(60deg) translateY(${scrollY * 0.2 - 50}px) scale(2.5)`);
    this.orbsTransform.set(`translateY(${scrollY * -0.5}px)`);

    // UI Foreground Parallax (Multi-layer Z-depth illusion)
    this.heroPanelTransform.set(`translateY(${scrollY * 0.2}px)`); // Whole panel moves slowly up
    this.nameTransform.set(`translateY(${scrollY * 0.05}px)`);
    this.titleTransform.set(`translateY(${scrollY * 0.10}px)`);
    this.descTransform.set(`translateY(${scrollY * 0.15}px)`);
    this.typewriterTransform.set(`translateY(${scrollY * 0.25}px)`);
    this.ctaTransform.set(`translateY(${scrollY * 0.35}px)`);
  }

  // 3D Hover Tilt on Mouse Move over document
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isBrowser) return;

    const x = (window.innerWidth / 2 - event.clientX) / 40; // Max ~20deg rotation
    const y = (window.innerHeight / 2 - event.clientY) / 40;

    // RotateX is driven by Y coordinate (inverted), RotateY by X coordinate
    this.tiltTransform.set(`rotateX(${y}deg) rotateY(${-x}deg)`);
  }

  // Reset Tilt when mouse leaves window
  @HostListener('document:mouseleave')
  onMouseLeave() {
    if (!this.isBrowser) return;
    this.tiltTransform.set('rotateX(0deg) rotateY(0deg)');
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

