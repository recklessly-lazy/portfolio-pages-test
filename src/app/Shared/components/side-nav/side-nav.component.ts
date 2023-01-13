import { animate, style, transition, trigger } from "@angular/animations";
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from "@angular/core";

@Component({
    selector: "app-side-nav",
    templateUrl: "./side-nav.component.html",
    styleUrls: ["./side-nav.component.scss"],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [],
})
export class SideNavComponent implements OnInit {
    constructor() {}

    @Input() show!: boolean;
    @Output() toggleNav: EventEmitter<boolean> = new EventEmitter<boolean>();

    toggleSideNav(show: boolean) {
        this.toggleNav.emit(show);
    }
    sections: string[] = [
        "About",
        "personal info",
        "tech skills",
        "education",
        "sample projects",
        "contact links",
    ];
    ngOnInit(): void {}
}
