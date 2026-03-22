import { Component, ChangeDetectionStrategy } from '@angular/core';
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
export default class HomeComponent {}
