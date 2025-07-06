import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Admin } from './admin';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [
    Admin
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,  
  ]
})
export class AdminModule { }
