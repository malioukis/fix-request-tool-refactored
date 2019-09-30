import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericComponent } from './components/generic/generic.component';

import { CustomMaterialModule } from '../shared/custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { CoreModule } from '../core/core.module';
import { GenericPresentationalComponent } from './views/generic/generic-presentational.component';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [GenericComponent, GenericPresentationalComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    CoreModule,
    StorageServiceModule
  ],
  exports: [
    // testing
    GenericPresentationalComponent,
    GenericComponent
  ]
})
export class FeaturesModule {}
