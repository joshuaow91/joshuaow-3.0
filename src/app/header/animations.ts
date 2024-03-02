import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAndSlideDownAnimation = 
    trigger('fadeAndSlideDown', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
        transition(':leave', [
            animate('600ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
        ])
    ]);
