import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GenericService } from '../../../core/services/generic.service';
import { Generic } from 'src/app/core/services/request-fields.model';
@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css'],
  providers: [GenericService]
})
export class GenericComponent implements OnInit {
  constructor(private genericService: GenericService) {}

  model: any = {};
  generic: Generic;

  getGeneric() {
    return this.genericService.getGeneric().subscribe((data: Generic) => {
      // this.model = JSON.stringify(data);
      // this.model = JSON.parse(this.model);
      this.model = data;

      console.log('model is: ', this.model);
      sessionStorage.setItem('genericData', JSON.stringify(this.model));
      //localStorage.setItem('genericKey', this.model);
      console.log(
        'sessionStorage getitem: ',
        sessionStorage.getItem('genericData')
      );

      if (typeof this.model === 'string') {
        console.log('it was a string');
      } else {
        console.log('einai obj logika');
      }
    });
  }
  ngOnInit() {
    this.getGeneric();
  }
  ngOnDestroy(): void {
    sessionStorage.removeItem('genericData');
  }
}
