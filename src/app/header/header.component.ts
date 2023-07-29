import { Component, HostListener, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeAndSlideDownAnimation } from "./animations";

@Component ({
    templateUrl: './header.component.html',
    selector: 'app-header',
    animations: [
        fadeAndSlideDownAnimation,
        trigger('fadeIn', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('800ms', style({ opacity: 1 })),
          ]),
        ]),
      ],
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) {}
  
    ngOnInit() {
        this.router.events.pipe(
          // filter out events that are not of type Scroll
          filter(e => e instanceof Scroll)
        ).subscribe((e: any) => {
          // if fragment exists in the URL
          if (e.anchor) {
            // wait for the DOM to be rendered
            setTimeout(() => {
              // get the element with id matching the fragment
              const element = document.querySelector('#' + e.anchor);
              if (element) {
                // get the position of the element relative to the top of the document
                const rect = element.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const elementTop = rect.top + scrollTop;
                
                // scroll to the element
                window.scrollTo({
                  top: elementTop,
                  behavior: 'smooth'
                });
              }
            }, 0);
          }
        });
      }
    isHidden = false;
    lastScrollTop = 0;
    
    @HostListener('window:scroll', [])
    onWindowScroll() {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        if (currentScrollTop > 300) {
          this.isHidden = currentScrollTop > this.lastScrollTop;
        }
        else {
          this.isHidden = false;
        }
        this.lastScrollTop = currentScrollTop;
    }
}
