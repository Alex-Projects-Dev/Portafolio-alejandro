import { Component, ChangeDetectionStrategy, HostListener, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-top-btn',
  standalone: true,
  templateUrl: './scroll-top-btn.component.html',
  styleUrl: './scroll-top-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollTopBtnComponent {
  isVisible = signal(false);
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isBrowser) return;
    // Show button if scrolled down more than 300px
    this.isVisible.set(window.scrollY > 300);
  }

  scrollToTop() {
    if (!this.isBrowser) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
