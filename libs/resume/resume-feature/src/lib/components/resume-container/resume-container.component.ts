import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  HobbiesComponent, PersonalDetailsComponent,
  ProjectCardComponent,
  SkillsComponent,
  WorkHistoryCardComponent
} from '@project-mike/resume/resume-ui';
import {
  educationHistory,
  History,
  hobbies, SideProject,
  sideProjects,
  Skill,
  skills,
  workHistory
} from '@project-mike/resume/resume-data-access';

@Component({
  selector: 'resume-feature-resume-container',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, WorkHistoryCardComponent, SkillsComponent, HobbiesComponent, ProjectCardComponent, PersonalDetailsComponent],
  templateUrl: './resume-container.component.html',
  styleUrl: './resume-container.component.scss'
})
export class ResumeContainerComponent {
  public workHistory: History[] = workHistory;
  public skills: Skill[] = skills;
  public hobbies: string[] = hobbies;
  public educationHistory: History[] = educationHistory;
  public sideProjects: SideProject[] = sideProjects;
}
