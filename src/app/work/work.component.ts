import { Component } from "@angular/core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { trigger, transition, style, animate } from '@angular/animations';

@Component ({
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

export class WorkComponent {
    arrowUp = faArrowUpRightFromSquare
    selectedTab: string = 'overview';
    darkMode = false;

    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    }

}