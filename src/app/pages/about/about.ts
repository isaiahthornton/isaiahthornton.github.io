import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EXPERIENCE, PROFILE, SKILLS } from '../../data/profile';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly profile = PROFILE;
  readonly experience = EXPERIENCE;
  readonly skills = SKILLS;

  readonly beyond = [
    {
      title: 'Fitness',
      text: "Gym and running. Staying active is how I stay sharp and handle a full schedule.",
    },
    {
      title: 'Mindfulness',
      text: 'I take mental health as seriously as physical health, and I make time for both.',
    },
    {
      title: 'Writing',
      text: 'I blog about digital identity, personal branding, and how people treat each other online.',
    },
  ];
}
