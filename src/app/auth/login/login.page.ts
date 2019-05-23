import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProviderService } from '../../../service/service-provider.service';
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

  constructor(/*private  authService: AuthService*/ private  router: Router, public service: ServiceProviderService) { }

  ngOnInit() {
  }
  login(form) {
      /*this.authService.login(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });*/
    console.log(form.value.user, form.value.pass);
    this.service.Loggin(form.value.user, form.value.pass).subscribe(
      (response) => {
        console.log(response);
    },
      error => console.log(error)
    );
  }

}
