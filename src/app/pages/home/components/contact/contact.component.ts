import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonSciFiComponent } from '../../../../shared/components/button-sci-fi/button-sci-fi.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonSciFiComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  email = 'alejandro@example.com'; // Placeholder
}
