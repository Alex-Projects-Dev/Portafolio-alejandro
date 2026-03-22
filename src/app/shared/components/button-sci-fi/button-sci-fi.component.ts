import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button-sci-fi',
  standalone: true,
  imports: [],
  template: `
    <a [href]="href" class="btn-sci-fi">
      <ng-content></ng-content>
    </a>
  `,
  styleUrl: './button-sci-fi.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSciFiComponent {
  @Input() href: string = '#';
}
