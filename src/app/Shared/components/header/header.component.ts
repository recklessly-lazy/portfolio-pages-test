import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() showSideNav!: boolean;
    @Output() onToggle = new EventEmitter<boolean>();
    sections = [
        { link: "About", id: "overview" },
        { link: "personal info", id: "personal_info" },
        { link: "skills", id: "technical_skills" },
        { link: "education", id: "education" },
        { link: "contact", id: "contact" },
    ];
    toggleNav(show: boolean) {
        this.onToggle.emit(show);
    }
}
