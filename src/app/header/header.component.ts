import { Component } from "@angular/core";
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

@Component ({
    templateUrl: './header.component.html',
    selector: 'app-header'
})

export class HeaderComponent {
    faTwitter = faTwitter
    faLinkedin = faLinkedin
    faGithub = faGithub
}