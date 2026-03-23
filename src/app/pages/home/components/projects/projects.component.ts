import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Holo-Dashboard',
      description: 'A futuristic analytics dashboard built with Angular and D3.js. Features real-time data visualization and customizable HUD widgets.',
      tags: ['Angular', 'RxJS', 'D3.js', 'SCSS'],
      link: '#',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' // SVG path
    },
    {
      title: 'Neon API Gateway',
      description: 'A robust API routing layer with advanced rate limiting and monitoring, designed for high-availability microservices.',
      tags: ['Node.js', 'Express', 'Redis', 'Docker'],
      link: '#',
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
    },
    {
      title: 'Cyber-UI Library',
      description: 'An open-source accessible component library featuring glassmorphism elements, neon interactions, and fully typed Angular components.',
      tags: ['Angular', 'TypeScript', 'Storybook'],
      link: '#',
      icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
    }
  ];
}
