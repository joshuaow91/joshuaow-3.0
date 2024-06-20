import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faArrowUpRightFromSquare,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class WorkComponent implements OnInit, OnDestroy {
  arrowUp = faArrowUpRightFromSquare;
  chevron = faChevronDown;
  selectedTab: string = 'overview';
  darkMode = false;
  themeSubscription: Subscription = new Subscription();
  showContent = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService
      .getThemeUpdates()
      .subscribe((theme) => {
        this.darkMode = theme === 'dark';
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  toggleDarkMode(event: any) {
    this.darkMode = event.target.checked;
  }

  battleOptions = {
    title: 'BattleOptions',
    type: 'Full-Stack Development',
    desc: 'This project aimed to revamp an outdated, spreadsheet-based contest by introducing an automated, user-friendly platform. This new system streamlined data access for faster, more informed decision-making and added a live leaderboard to inject a competitive edge. The result was a surge in user engagement and the generation of new business leads. In short, the project turned a tedious manual process into a dynamic, real-time experience.',
    stack: 'Java | Spring Boot | React | PostgreSQL | Tailwind CSS | AWS S3',
    link: 'https://contest.stratalerts.com/',
  };

  overview = {
    title: 'Project Overview',
    problem:
      'Manual data entry, updates, and leaderboard notifications were inefficient and error-prone.',
    solution:
      'Automate these processes by evolving the application from a spreadsheet-based system to a fully automatic Java Spring Boot application.',
  };

  transition = {
    title: 'Transition to Fully Automatic Java Spring Boot Application',
    architecture: `
        Backend: Java, Spring Boot for building the application.
        Frontend: React for user interface.
        Database: PostgreSQL for data storage.
      `,
    automation: `
        Data Entry & Updates: Use cron jobs to schedule tasks.
        Leaderboard Notifications: Automated via scheduled tasks.
        API Integration: Use Polygon.io API to fetch the high of day price.
      `,
  };

  automationDetails = {
    title: 'Automation Details',
    cronJobQueries: `
        Fetch high of day price from Polygon.io API every 5 minutes.
        Calculate new percentage gains.
        Deliver intraday updates via webhooks.
      `,
  };

  restfulApi = {
    title: 'RESTful API-Powered Search and Entry Submission Tool',
    functionality: `
        User inputs stock tickers.
        Application queries Polygon.io API.
        Parse JSON response to extract options contracts.
      `,
    implementation: `
        Create RESTful API endpoints using Spring Boot.
        Handle JSON parsing and data extraction.
      `,
  };

  databaseOptimization = {
    title: 'Database Optimization',
    performance: `
        Use indexing to speed up queries.
        Integrate JPA with Hibernate for efficient object-relational mapping.
      `,
    results: `
        Successfully automated the entire process of data entry, updates, and leaderboard notifications.
Transformed the application from a manual, spreadsheet-based system to a fully automated, real-time platform.
      `,
  };

  communityBuilding = {
    title: 'Community Building',
    userBase: 'Grew to over 400 registered users.',
    activeParticipation: '60-70 active weekly participants.',
    revenueGeneration: 'Converted 5% of users to paid memberships.',
  };

  overviewItems = [
    { title: 'Problem', content: this.overview.problem },
    { title: 'Solution', content: this.overview.solution },
  ];

  transitionItems = [
    { title: 'Architecture', content: this.transition.architecture },
    { title: 'Automation', content: this.transition.automation },
  ];

  automationDetailsItems = [
    {
      title: 'Cron Job Queries',
      content: this.automationDetails.cronJobQueries,
    },
  ];

  restfulApiItems = [
    { title: 'Functionality', content: this.restfulApi.functionality },
    { title: 'Implementation', content: this.restfulApi.implementation },
  ];

  databaseOptimizationItems = [
    { title: 'Performance', content: this.databaseOptimization.performance },
    { title: 'Results', content: this.databaseOptimization.results },
  ];

  communityBuildingItems = [
    { title: 'User Base', content: this.communityBuilding.userBase },
    {
      title: 'Active Participation',
      content: this.communityBuilding.activeParticipation,
    },
    {
      title: 'Revenue Generation',
      content: this.communityBuilding.revenueGeneration,
    },
  ];

  // lesson = {
  //   title: 'Lessons Learned',
  //   test: 'The development process highlighted the value of an iterative approach, where feedback and testing play a key role. By building, testing, and refining in cycles, the final product was more robust and effective.',
  //   uxui: 'User interaction and engagement can be significantly improved by effective user interface and user experience design. The adoption of a dynamic leaderboard serves as an excellent example of this, promoting competition and commitment amongst users.',
  //   auto: 'Transitioning from a manual to an automated system demonstrated the immense potential of automation in enhancing operational efficiency and accuracy. It reiterated that automation should be a priority in areas of high-frequency, repetitive tasks, or complex calculations.',
  //   data: 'Recognizing the importance of efficient data retrieval and the role it plays in decision-making. The custom search tool dramatically improved data accessibility, expediting the decision-making process.',
  //   impact:
  //     'The project served as a vivid reminder of the transformative potential of automation, showcasing how manual tasks can be made more efficient, thus freeing up resources for other important work.',
  //   conclusion:
  //     'This experience has significantly contributed to my professional growth as a software engineer, underlining the importance of user-centered design, rigorous testing, efficient problem-solving, and effective project management.',
  // };

  // lessonItems = [
  //   { title: 'Iterative Development and Testing', content: this.lesson.test },
  //   { title: 'Importance of UI/UX', content: this.lesson.uxui },
  //   { title: 'Automation Efficiency', content: this.lesson.auto },
  //   { title: 'Data Accessibility', content: this.lesson.data },
  //   {
  //     title: 'The impact of automation on productivity',
  //     content: this.lesson.impact,
  //   },
  //   { title: 'Conclusion', content: this.lesson.conclusion },
  // ];
}
