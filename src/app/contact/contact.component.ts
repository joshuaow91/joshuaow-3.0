import { Component } from "@angular/core";
import { faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

@Component ({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    arrowUp = faArrowUpRightFromSquare
    twitter = faTwitter
    linkedin = faLinkedin
    github = faGithub
    email = faEnvelope
}