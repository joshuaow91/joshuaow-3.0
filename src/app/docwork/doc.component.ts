import { Component } from "@angular/core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { trigger, transition, style, animate } from '@angular/animations';

@Component ({
    selector: 'app-work-doc',
    templateUrl: './doc.component.html',
    animations: [
        trigger('fadeIn', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('800ms', style({ opacity: 1 })),
          ]),
        ]),
      ],
})

export class DocComponent {
    arrowUp = faArrowUpRightFromSquare



    tfo = {
      title: 'TFO Doc Library',
      type: 'Front-End Development',
      desc: {
        one: 'A prominent TradingView indicator provider faced consistent user inquiries. To address this, an intuitive guidance webpage was developed, offering detailed explanations and a custom search tool. This solution reduced repetitive questions and significantly improved the user experience while also providing more time for the owner to concentrate on enhancing existing products or creating new ones.',
      },
      stack: 'React | TypeScript | Tailwind',
      link: 'https://docs.tradeforopp.com/'
    }





}
