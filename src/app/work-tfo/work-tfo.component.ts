import { Component } from "@angular/core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { trigger, transition, style, animate } from '@angular/animations';

@Component ({
    selector: 'app-work-tfo',
    templateUrl: './work-tfo.component.html',
    animations: [
        trigger('fadeIn', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('800ms', style({ opacity: 1 })),
          ]),
        ]),
      ],
})

export class WorkTfoComponent {
    arrowUp = faArrowUpRightFromSquare

 

    tfo = {
      title: 'TFO Indicators',
      type: 'Front-End Development',
      desc: {
        one: 'Built a robust and user-friendly website to address the client\'s need for a platform that not only showcases their specialized TradingView indicators but also facilitates a subscription-based revenue model. This solution effectively transforms the client\'s expertise into a marketable, subscription-based product, optimizing both user engagement and revenue generation.',
      },
      stack: 'React | TypeScript | Tailwind',
      link: 'https://stratalerts.com/tfo'
    }





}