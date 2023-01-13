import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./Shared/components/layout/layout.component";
import { HeaderComponent } from "./Shared/components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SideNavComponent } from './Shared/components/side-nav/side-nav.component';
import { MatSidenavModule} from '@angular/material/sidenav'

@NgModule({
    declarations: [AppComponent, LayoutComponent, HeaderComponent, SideNavComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [LayoutComponent, HeaderComponent, SideNavComponent],
})
export class AppModule {}
