import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { RegisterComponent } from './register.component';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class RegisterModule { }
