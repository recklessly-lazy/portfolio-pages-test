import { Component } from "@angular/core";

interface PersonalInfo {
    dob: string;
    email: string;
    phone: string;
    address?: string;
    language: string;
}

interface Education {
    batch: string;
    course: string;
    institution: string;
    percentage: string;
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
    educationInfo: Array<Education> = [
        {
            batch: "2012-2013",
            course: "SSLC",
            institution: "Sri Jayendra matric school",
            percentage: "96",
        },
        {
            batch: "2014-2015",
            course: "Higher secondary",
            institution: "Sri Jayendra matric school",
            percentage: "91",
        },
        {
            batch: "2015-2019",
            course: "Bachelor of Engineering, E.E.E",
            institution: "Mepco Schlenk Engineering College",
            percentage: "74",
        },
    ];
}
