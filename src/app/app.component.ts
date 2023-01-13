import { Component } from "@angular/core";

interface PersonalInfo {
    dob: string;
    email: string;
    phone: string;
    address?: string;
    language: string;
}
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "my-portfolio";

    personalInfo = {
        "Date of birth": "Sep 14, 1997",
        Email: "srlaxman1497@gmail.com",
        Phone: "+91 8667669489",
        Languages: "English, Tamil",
    };
}
