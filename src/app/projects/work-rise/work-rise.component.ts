import { Component } from '@angular/core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-work-rise',
  templateUrl: './work-rise.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class WorkRiseComponent {
  arrowUp = faArrowUpRightFromSquare;

  rise = {
    title: 'Rise Statistics',
    type: 'Front-End Development',
    desc: {
      one: "The client required a visually engaging marketing page to promote their financial markets analysis platform, with motion design as a central element to enhance user experience. The solution includes dynamic parallax animations, smooth transitions, and responsive design principles to engage visitors and communicate the product's value. Key features include interactive pricing cards, query-based navigation for seamless deep linking, and animated dropdowns. The website serves as both a marketing tool and an entry point for users to access the platform or sign up for the service.",
    },
    stack: 'React | Framer Motion | Tailwind CSS',
    link: 'https://risestats.netlify.app/',
  };
}
