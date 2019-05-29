import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProviderService } from '../../../service/service-provider.service';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
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
  declarations: [RegisterPage],
  providers: [
    ServiceProviderService
  ]
})
export class RegisterPageModule {}
