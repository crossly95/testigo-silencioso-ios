import { Component, OnInit } from '@angular/core';
import { ServiceProviderService } from '../../../service/service-provider.service';
import { NavController, LoadingController} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  registerForm: FormGroup;
  submitted = false;

  constructor(/*private  authService: AuthService*/
    private formBuilder: FormBuilder,
    public service: ServiceProviderService,
    public navCtrl: NavController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(6)]],
      pass: ['', [Validators.required]],
    });
  }

  get f() { return this.registerForm.controls; }

  login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.presentLoading().then(() => {
      this.service.Loggin(this.registerForm.value.user, this.registerForm.value.pass).subscribe(
        (response) => {
          this.dismissLoading();
          this.dismissLoading().then(() => {
            this.responseObj = response;
            console.log(this.responseObj);
          });
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
