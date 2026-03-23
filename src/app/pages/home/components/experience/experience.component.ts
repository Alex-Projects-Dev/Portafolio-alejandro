import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'DRUNI',
      period: 'Jun 2025 – Actualidad',
      role: 'Desarrollador Web & Coordinación de Despliegues',
      description: 'Desarrollo de aplicaciones web con Angular y RxJS. Implementación de funcionalidades reutilizables y mantenibles. Diseño y desarrollo de componentes modulares. Automatización de despliegues mediante pipelines e integración con Azure DevOps.'
    },
    {
      company: 'LABERIT',
      period: 'May 2023 – Ene 2025',
      role: 'Desarrollador Web',
      description: 'Desarrollo y mantenimiento de aplicaciones con Angular, RxJS y Angular Material. Maquetación con SCSS e integración de informes con Jasper Reports.'
    },
    {
      company: 'DISID',
      period: 'Mar 2022 – Abr 2023',
      role: 'Desarrollador Web',
      description: 'Desarrollo de aplicaciones web con Angular, RxJS y PrimeNG. Trabajo con arquitectura basada en Monorepo.'
    }
  ];

  education = [
    {
      title: 'Grado en Ingeniería Informática',
      institution: 'UOC',
      period: 'Actualidad'
    },
    {
      title: 'Desarrollo de Aplicaciones Web',
      institution: 'CIFP Mislata',
      period: '2021 – 2022'
    },
    {
      title: 'DAM Multiplataforma',
      institution: 'Florida Universitaria',
      period: '2020 – 2021'
    }
  ];
}
