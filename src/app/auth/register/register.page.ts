import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(/*private  authService: AuthService*/
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificacion: ['', [Validators.required, Validators.minLength(6)]],
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      fecha: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(15)]]

    });
  }

  get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;
    // stop here if form is invalid
    console.log(this.registerForm);
    if (this.registerForm.invalid) {
      return;
    }

    
    /*this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });*/
  }

}
