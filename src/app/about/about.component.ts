import { Component } from "@angular/core";
import { faReact, faAngular, faJs, faJira, faGitAlt, faNodeJs,  } from "@fortawesome/free-brands-svg-icons";


@Component ({
    selector: 'app-about',
    templateUrl: './about.component.html'
})

export class AboutComponent {
    faReact = faReact
    faAngular = faAngular
    faJs = faJs
    faJira = faJira
    faGit = faGitAlt
    faNode = faNodeJs
}