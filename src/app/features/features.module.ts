import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericComponent } from './components/generic/generic.component';

import { CustomMaterialModule } from '../shared/custom-material.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { StorageServiceModule } from 'ngx-webstorage-service';


@NgModule({
  declarations: [GenericComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    FormsModule,
    ReactiveFormsModule,

    CoreModule,
    StorageServiceModule



  ],
  exports: [
    // testing
    GenericComponent
  ]
})
export class FeaturesModule {}
