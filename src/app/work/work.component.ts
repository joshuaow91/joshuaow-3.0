import { Component } from "@angular/core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

@Component ({
    selector: 'app-work',
    templateUrl: './work.component.html'
})

export class WorkComponent {
    arrowUp = faArrowUpRightFromSquare
}