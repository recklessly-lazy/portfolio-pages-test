import {
    trigger,
    transition,
    style,
    state,
    animate,
} from "@angular/animations";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger("navTrigger", [
            transition(":enter", [
                style({ transform: "translateX(-100%)" }),
                animate("400ms", style({ transform: "translateX(0)" })),
            ]),
            transition(":leave", [
                style({ transform: "translateX(0)" }),
                animate("400ms", style({ transform: "translateX(-100%)" })),
            ]),
        ]),
        trigger("backDropTrigger", [
            transition(":enter", [
                style({ opacity: 0 }),
                animate("400ms", style({ opacity: 1 })),
            ]),
            transition(":leave", [
                style({ opacity: 1 }),
                animate("400ms", style({ opacity: 0 })),
            ]),
        ]),
    ],
})
export class LayoutComponent {
    showSideNav!: boolean;

    toggleSideNav(show: boolean) {
        this.showSideNav = show;
    }
}
