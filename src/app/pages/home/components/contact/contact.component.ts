import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonSciFiComponent } from '../../../../shared/components/button-sci-fi/button-sci-fi.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonSciFiComponent, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  email = 'alejandro@example.com'; // Placeholder
}
