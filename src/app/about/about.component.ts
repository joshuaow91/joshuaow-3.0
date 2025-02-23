import { Component } from '@angular/core';
import {
  faReact,
  faAngular,
  faJs,
  faJira,
  faGitAlt,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faComments,
  faLightbulb,
  faProjectDiagram,
  faPuzzlePiece,
  faSync,
  faUserCheck,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  faReact = faReact;
  faAngular = faAngular;
  faJs = faJs;
  faJira = faJira;
  faGit = faGitAlt;
  faNode = faNodeJs;
  faCode = faCode;
  faLight = faLightbulb;
  faSync = faSync;
  faComments = faComments;
  faUser = faUserFriends;
  faUserCheck = faUserCheck;

  aboutMe = {
    intro:
      "I'm a Software Engineer specializing in developing scalable, customer-centric solutions. My expertise lies in problem-solving, efficient communication, and quickly adapting to new technologies to meet client and business needs. In my role as a Software Engineer, I focus on the these key areas:",
    problemSolving:
      'I excel in analyzing complex problems and coming up with effective solutions, breaking down challenges into manageable parts',
    concepts:
      'My work is characterized by precision and accuracy, with credit to testing, peer reviews and refined iterations of my code to ensure its quality',
    adaptability:
      'I embrace change and eagerly acquire new skills, staying up-to-date with emerging technologies and methodologies in the dynamic field of software engineering.',
    communication:
      'I thrive while working under a collaborative environment, sharing knowledge, and working cohesively with others towards a common goal, all while effectively communicating complex technical concepts to non-technical team members and clients alike.',
    // teamwork:
    //   'My experience has taught me the value of effective teamwork in software development. I believe in fostering a collaborative environment, sharing knowledge, and working cohesively with others towards a common goal.',
    // customer:
    //   'Understanding the needs of the customer is at the heart of what I do. I am dedicated to creating user-friendly, effective solutions that meet the specific needs of the end-users, ultimately helping businesses to thrive.',
    tools: 'My toolkit consists of the following technologies:',
  };

  aboutItems = [
    {
      title: 'Problem-Solving',
      content: this.aboutMe.problemSolving,
      svgPath:
        'M4 7a3 3 0 0 1 3-3M5 19h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 1 7c0 4 4 5 4 9h4Z',
      viewBox: '0 0 14 20',
    },
    {
      title: 'Attention to Detail',
      content: this.aboutMe.concepts,
      svgPath: 'M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15',
      viewBox: '0 0 20 16',
    },
    {
      title: 'Adaptability',
      content: this.aboutMe.adaptability,
      svgPath: 'm1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3',
      viewBox: '0 0 20 18',
    },
    {
      title: 'Communication & Team Work',
      content: this.aboutMe.communication,
      svgPath:
        'M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z',
      viewBox: '0 0 20 18',
    },
    // {
    //   title: 'Teamwork',
    //   content: this.aboutMe.teamwork,
    //   svgPath:
    //     'M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z',
    //   viewBox: '0 0 20 18',
    // },
    // {
    //   title: 'Customer Orientation',
    //   content: this.aboutMe.customer,
    //   svgPath:
    //     'M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    //   viewBox: '0 0 20 20',
    // },
  ];
}
