import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE, PROJECTS } from '../../data/profile';
import { ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly profile = PROFILE;
  readonly projects = PROJECTS;

  readonly now = [
    {
      label: 'Building',
      text: 'ObsidianTrading, my live trade-journaling app, in public beta.',
    },
    {
      label: 'Training',
      text: 'Revature software development program: C#, ASP.NET Core, EF Core, SQL Server, and Angular.',
    },
    {
      label: 'Looking for',
      text: 'Entry-level roles in software development, cybersecurity, or data.',
    },
  ];
}
