import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProviderService } from '../../../service/service-provider.service';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loader;
  responseObj;
  departamento: any[];
  municipio: any[];
  poblado: any[];

  constructor(/*private  authService: AuthService*/
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public service: ServiceProviderService,
    public toastController: ToastController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificacion: ['', [Validators.required, Validators.minLength(6)]],
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      fecha: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(5)]],
      telemergencia: ['', [Validators.required, Validators.minLength(5)]],
      departamento: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      poblado: ['', [Validators.required]],
      direccion: ['', [Validators.required, Validators.pattern('^[#0-9a-zA-Z-\\s]+$')]],
      correo:  ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\*\\.\\,\\!\\-\\_\\"\\#\\$\\%\\&\\/\\(\\)\\?\\¿\\¡\\+\\{\\}\\;\\:\\s])[a-zA-Z0-9\\*\\.\\,\\!\\-\\_\\"\\#\\$\\%\\&\\/\\(\\)\\?\\¿\\¡\\+\\{\\}\\;\\:\\s)]+$')]],
      });
    this.cargarDepartamento();

  }

  get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;
    // stop here if form is invalid

    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm);
    if (this.registerForm.value.telefono === this.registerForm.value.telemergencia) {
      this.presentToastWithOptions();
    }

  }

  cargarDepartamento() {
    this.presentLoading('Cargando informacion...').then(() => {
      this.service.Departamentos().subscribe(
        (response) => {
          this.dismissLoading();
          this.dismissLoading().then(() => {
            this.responseObj = response;
            this.departamento = this.responseObj;
            console.log(this.responseObj);
          });
        },
        error => console.log(error)
      );
    });
  }

  cargarMunicipio(event) {
    this.presentLoading('Cargando municipios...').then(() => {
      this.service.Municipio(event.detail.value).subscribe(
        (response) => {
          this.dismissLoading();
          this.dismissLoading().then(() => {
            this.responseObj = response;
            this.municipio = this.responseObj;
            console.log(this.responseObj);
          });
        },
        error => console.log(error)
      );
    });
  }

  cargarPoblado(event) {
    this.presentLoading('Cargando poblados...').then(() => {
      this.service.poblado(event.detail.value).subscribe(
        (response) => {
          this.dismissLoading();
          this.dismissLoading().then(() => {
            this.responseObj = response;
            this.poblado = this.responseObj;
            console.log(this.responseObj);
          });
        },
        error => console.log(error)
      );
    });
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Error, Los numeros de contacto y de emergencia no pueden ser iguales',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }
  async presentLoading(menss) {
    this.loader = await this.loadingController.create({
      message: menss,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await this.loader.present();
  }

  async dismissLoading() {
    await this.loader.dismiss();
  }


  /*this.authService.register(form.value).subscribe((res) => {
    this.router.navigateByUrl('home');
  });*/


}
