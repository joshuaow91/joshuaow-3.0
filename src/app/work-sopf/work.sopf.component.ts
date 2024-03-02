import { Component } from "@angular/core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { trigger, transition, style, animate } from '@angular/animations';

@Component ({
    selector: 'app-work-sopf',
    templateUrl: './work-sopf.component.html',
    animations: [
        trigger('fadeIn', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('800ms', style({ opacity: 1 })),
          ]),
        ]),
      ],
})

export class WorkSopfComponent {
    arrowUp = faArrowUpRightFromSquare



    stat = {
      title: 'Save On Prop Firms',
      type: 'Full-Stack Development',
      desc: {
        one: 'This project involves the development of an affiliate coupon website. Key features include a coupon code management system, a user-friendly custom filtering tool for firm selection all with admin capabilities to enable easy coupon and content management. Automation through Cron jobs ensures the website maintains up-to-date promotions by clearing expired coupon codes. These solutions enhance user experience and facilitate effective affiliate marketing partnerships.',
      },
      stack: 'Spring Boot | Java | React | Postgres | Tailwind',
      link: 'https://www.saveonpropfirms.com/'
    }





}
