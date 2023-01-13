import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() showSideNav!: boolean;
    @Output() onToggle = new EventEmitter<boolean>()
    toggleNav(show: boolean) {
        this.onToggle.emit(show)
    }
}
