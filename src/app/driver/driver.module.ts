import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverLoginComponent } from './driver-login.component';
import { DriverRegistrationComponent } from './driver-registration.component';
import { DriverHomeComponent } from './driver-home.component';
import { DriverWelcomeComponent } from './driver-welcome.component';
import { RouterModule } from '@angular/router';
import { DriverRoutes } from './driver.router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DriverService } from './driver.service';
import { DriverNotificationComponent } from './driver-notification.component';
import { DriverReviewsComponent } from './driver-reviews.component';
import { DriverRidesComponent } from './driver-rides.component';


@NgModule({
    declarations:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverWelcomeComponent,
        DriverNotificationComponent,
        DriverReviewsComponent,
        DriverRidesComponent

    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(DriverRoutes),
        FormsModule,
        HttpClientModule
    ],
    exports:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverWelcomeComponent,
        DriverNotificationComponent,
        DriverReviewsComponent,
        DriverRidesComponent,
        RouterModule,
        FormsModule
        
    ],
    providers:[
        DriverService
    ]
})

export class DriverModule{

}