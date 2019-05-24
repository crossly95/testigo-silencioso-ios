import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProviderService } from '../../../service/service-provider.service';
import { LoadingController } from '@ionic/angular';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users: any[];
  user: string;
  pass: string;
  loader;
  responseObj;

  constructor(/*private  authService: AuthService*/ private  router: Router, public service: ServiceProviderService, public loadingController: LoadingController) { }

  ngOnInit() {
  }
  login( form: { value: { user: any; pass: any; }; }){

    this.presentLoading().then(()=>{
      this.service.Loggin(form.value.user, form.value.pass).subscribe(
        (response) => {
          this.dismissLoading();
          this.dismissLoading().then(() => {
          this.responseObj = response;
          console.log(this.responseObj);
          })
      },
        error => console.log(error)
      );
    });


  }

async presentLoading() {
   this.loader = await this.loadingController.create({
    message: 'Comprobando informacion...',
    translucent: true,
    cssClass: 'custom-class custom-loading'
   });
   await this.loader.present();
 }

 async dismissLoading() {
   await this.loader.dismiss();
 }

}
