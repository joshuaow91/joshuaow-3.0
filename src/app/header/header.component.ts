import { Component, HostListener, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { fadeAndSlideDownAnimation } from "./animations";
import { faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

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
        trigger('slideInOut', [
          state('in', style({transform: 'translateY(0)'})),
          state('out', style({transform: 'translateY(-100%)'})),
          transition('in => out', animate('400ms ease-in-out')),
          transition('out => in', animate('400ms ease-in-out'))
        ]),
      ],
})
export class HeaderComponent implements OnInit {
  twitter = faTwitter
  linkedin = faLinkedin
  github = faGithub
  email = faEnvelope
  isMenuOpen: boolean = false
  screenSize: 'small' | 'medium' | 'large' = 'large'
  menuIcon = faBars; 
  menuItems = [
    {name: 'Home', routerLink: '/', fragment: 'home'},
    {name: 'Work', routerLink: '/', fragment: 'work'},
    {name: 'About', routerLink: '/', fragment: 'about'},
    {name: 'Contact', routerLink: '/', fragment: 'contact'}
  ]; 

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    this.menuIcon = this.isMenuOpen ? faTimes : faBars;
  }

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
        this.setScreenSize();

      }
    isHidden = false;
    lastScrollTop = 0;
    
    @HostListener('window:scroll', [])
    onWindowScroll() {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop > 100) {
        this.isHidden = currentScrollTop > this.lastScrollTop;
      } else {
        this.isHidden = false;
      }
      this.lastScrollTop = currentScrollTop;
    }
    

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.setScreenSize();
    }

    private setScreenSize(): void {
        const width = window.innerWidth;
        if (width < 640) {
            this.screenSize = 'small';
        } else if (width < 1024) {
            this.screenSize = 'medium';
        } else {
            this.screenSize = 'large';
        }
        if (this.screenSize === 'large') {
            this.isMenuOpen = false;
        }
    }
}
