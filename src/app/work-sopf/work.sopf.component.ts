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
        one: 'This project is an affiliate coupon website designed to enhance the management of promotions and affiliate marketing partnerships. It features a coupon management system, enabling the ability to update coupon codes. The website benefits from optimized search engine visibility and performance, thanks to the use of Next.js. The platform also supports admin & user reviews, enabling users & admins to post detailed insights. Additionally, the site hosts a dynamic blog, providing a medium for publishing relevant articles, updates, and news, which also boosts SEO efforts and user engagement.',
      },
      stack: 'Next.js | Node.js | Contentful CMS | Tailwind CSS',
      link: 'https://www.saveonpropfirms.com/'
    }





}
