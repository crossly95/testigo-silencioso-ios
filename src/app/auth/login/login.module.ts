import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ServiceProviderService } from '../../../service/service-provider.service';
import { IonicModule } from '@ionic/angular';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
  providers: [
    ServiceProviderService
  ]
})
export class LoginPageModule {}
