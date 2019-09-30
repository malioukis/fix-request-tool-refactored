import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericService } from './services/generic.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StorageServiceModule
  ],
  exports: [

  ],
  providers:[
    GenericService
  ]
})
export class CoreModule { }
