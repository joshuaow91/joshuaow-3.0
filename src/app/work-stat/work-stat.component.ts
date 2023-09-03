import { Component } from "@angular/core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { trigger, transition, style, animate } from '@angular/animations';

@Component ({
    selector: 'app-work-stat',
    templateUrl: './work-stat.component.html',
    animations: [
        trigger('fadeIn', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('800ms', style({ opacity: 1 })),
          ]),
        ]),
      ],
})

export class WorkStatComponent {
    arrowUp = faArrowUpRightFromSquare

 

    stat = {
      title: 'STAT Analytics',
      type: 'Front-End Development',
      desc: {
        one: 'Redesigned the main website to spotlight services, products, and educators more effectively. The revamped user experience offers an intuitive layout for easier navigation, fostering greater engagement and setting the foundation for business growth.',
      },
      stack: 'React | TypeScript | Tailwind',
      link: 'https://stattrading.netlify.app/'
    }





}