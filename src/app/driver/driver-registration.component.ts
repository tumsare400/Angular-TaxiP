// import { Component, OnInit } from '@angular/core';
// import{Driver} from './driver';
// import {DriverService} from './driver.service';
// import { enableProdMode } from '@angular/core';
// import { Router } from '@angular/router';

// enableProdMode();

// @Component({
//     templateUrl:"./driver-registration.component.html"
//     //selector:"driver-registration"
// })

// export class DriverRegistrationComponent implements OnInit{

//     driver:Driver;
//     constructor(private driverService: DriverService, private router: Router){}
//     ngOnInit(){
//         this.driver=new Driver();
//     }

//     registrationForDriver(){
//         alert("Hi");
//         console.log(this.driver);
//         // let name = (<HTMLInputElement>document.getElementById("name")).value;
//         // let email = (<HTMLInputElement>document.getElementById("email")).value;
//         // let contact = (<HTMLInputElement>document.getElementById("contact")).value;
//         // let fgender = (<HTMLInputElement>document.getElementById("fgender")).value;
//         // let mgender = (<HTMLInputElement>document.getElementById("mgender")).value;
//         // let start = (<HTMLInputElement>document.getElementById("start")).value;
//         // let address = (<HTMLInputElement>document.getElementById("address")).value;
//         // let select = (<HTMLInputElement>document.getElementById("select")).value;
//         // let cityselect = (<HTMLInputElement>document.getElementById("cityselect")).value;
//         // let postalCode = (<HTMLInputElement>document.getElementById("postalCode")).value;
//         // let licsno = (<HTMLInputElement>document.getElementById("licsno")).value;
//         // let vir = (<HTMLInputElement>document.getElementById("vir")).value;
//         // let policereport = (<HTMLInputElement>document.getElementById("policereport")).value;
//         // let password = (<HTMLInputElement>document.getElementById("password")).value;
 
//         this.driverService.registrationForDriver(this.driver).subscribe((data)=>{
//             console.log("success");
//             console.log(data);
//             if(data!=null){
//                 alert("Done");
//                 this.router.navigate(['/driver/login']);
//             }
//         })
//     }


// }


import { Component, OnInit } from '@angular/core';
import{Driver} from './driver';
import {DriverService} from './driver.service';
import { enableProdMode } from '@angular/core';
import { Router } from '@angular/router';

enableProdMode();

@Component({
    templateUrl:"./driver-registration.component.html"
    //selector:"driver-registration"
})

export class DriverRegistrationComponent implements OnInit{

    driver:Driver;
    constructor(private driverService: DriverService, private router: Router){}
    ngOnInit(){
        this.driver=new Driver();
    }

    registrationForDriver(){
        console.log(this.driver);
        this.driverService.registrationForDriver(this.driver).subscribe((data)=>{
            console.log("success");
            console.log(data);
            if(data!=null){
                alert("Registration successful");
                this.router.navigate(["/driver/login"]);
            }
        })
    }


}