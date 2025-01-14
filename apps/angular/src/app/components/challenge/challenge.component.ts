import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Challenge } from 'src/app/models/challenge.model';
import { contributors } from '@fmc/data/content';

@Component({
  standalone: true,
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss'],
  imports: [NgIf, RouterLink],
})
export class ChallengeComponent {
  @Input() challenge!: Challenge;
  public contributors = contributors;
}
