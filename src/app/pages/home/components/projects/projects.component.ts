import { Component, ChangeDetectionStrategy, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal/scroll-reveal.directive';

export interface Project {
  title: string;
  description: string;
  icon: string[];
  status?: string;
  tags: string[];
  demo: string;
  github: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  projects = signal<Project[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      fetch('projects.json')
        .then(res => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
        .then(data => this.projects.set(data))
        .catch(err => console.error('Error loading projects', err));
    }
  }
}
