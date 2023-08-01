import { Component } from "@angular/core";
import { faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

@Component ({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    arrowUp = faArrowUpRightFromSquare
    twitter = faTwitter
    linkedin = faLinkedinIn
    github = faGithub
    email = faEnvelope

    links = {
        email: 'mailto:joshuaow@gmail.com',
        twitter: 'https://www.twitter.com/JoshuaOwDev',
        linkedin: 'https://www.linkedin.com/in/JoshuaOwDev',
        github: 'https://www.github.com/joshuaow91'
    }
}