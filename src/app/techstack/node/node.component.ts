import { Component } from "@angular/core";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";

@Component ({
    selector: 'app-node',
    templateUrl: './node.component.html'
})

export class NodeComponent {
    faNode = faNodeJs
}