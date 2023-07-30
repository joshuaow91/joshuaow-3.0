import { Component } from "@angular/core";
import { faReact, faAngular, faJs, faJira, faGitAlt, faNodeJs,  } from "@fortawesome/free-brands-svg-icons";
import { faCode, faComments, faLightbulb, faProjectDiagram, faPuzzlePiece, faSync, faUserCheck, faUserFriends } from "@fortawesome/free-solid-svg-icons";


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
    faCode = faCode
    faLight = faLightbulb
    faSync = faSync
    faComments = faComments
    faUser = faUserFriends
    faUserCheck = faUserCheck
}