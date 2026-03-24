import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  coreSkills = [
    { name: 'Angular', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' }, // Pseudo icons for demo
    { name: 'TypeScript', icon: 'M4 4h16v16H4V4zm9 10h-2v4H9v-4H7v-2h6v2zm3 0h-2v4h-2v-4h-2v-2h6v2z' },
    { name: 'RxJS', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { name: 'SCSS / CSS', icon: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' }
  ];

  tools = [
    'JavaScript', 'Node.js', 'Spring Boot', 'Git / GitHub', 'Azure DevOps', 'CI/CD Pipelines', 'Jasper Reports'
  ];
}
