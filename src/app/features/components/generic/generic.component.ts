import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { GenericService } from '../../../core/services/generic.service';
import { Generic, Model } from 'src/app/core/services/request-fields.model';
@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css'],
  providers: [GenericService]
})
export class GenericComponent implements OnInit {
  model;
  constructor(private genericService: GenericService) {}
  getGeneric() {
    return this.genericService.getGeneric().subscribe((data: Generic[]) => {
      this.model = data;
      console.log('model is: ', this.model);
      localStorage.setItem('keya', 'asd');
    });
  }
  ngOnInit() {
    this.getGeneric();
    console.log('parent ', this.model);
  }
  ngOnDestroy(): void {
    localStorage.removeItem('keya');
  }
}
