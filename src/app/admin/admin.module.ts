import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './admin-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.router';



@NgModule({
    declarations:[AdminLoginComponent],
    imports:[BrowserModule,RouterModule.forChild(AdminRoutes)],
    exports:[AdminLoginComponent, RouterModule]
})
export class AdminModule{

}