import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
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

  form = new FormGroup({});
  model: any = {};
  generic: Generic;

  fields: FormlyFieldConfig[] = [
    {
      key: 'userId',
      type: 'input',
      templateOptions: {
        label: 'userId',
        placeholder: 'Enter userId',
        required: true,
        minLength: 2
      }
    },
    {
      key: 'channel',
      type: 'input',
      templateOptions: {
        label: 'channel',
        placeholder: 'Enter channel',
        required: true,
        minLength: 2
      }
    },
    {
      key: 'country',
      type: 'input',
      templateOptions: {
        label: 'country',
        placeholder: 'Enter country',
        required: true,
        minLength: 2
      }
    },
    {
      key: 'subSystem',
      type: 'input',
      templateOptions: {
        label: 'subSystem',
        placeholder: 'Enter subSystem',
        required: true,
        minLength: 2
      }
    },
    {
      key: 'Language',
      type: 'input',
      templateOptions: {
        label: 'Language',
        placeholder: 'Enter Language',
        required: true,
        minLength: 2
      }
    },
    {
      key: 'requestDate',
      type: 'input',
      templateOptions: {
        label: 'requestDate',
        placeholder: 'Enter requestDate',
        required: true,
        minLength: 2
      }
    },
    {
      key: 'businessDate',
      type: 'input',
      templateOptions: {
        label: 'businessDate',
        placeholder: 'Enter businessDate',
        required: true,
        minLength: 2
      }
    }
  ];

  getGeneric() {
    return this.genericService.getGeneric().subscribe((data: Generic) => {
      this.model = JSON.stringify(data);
      this.model = JSON.parse(this.model);


      console.log('model is: ', this.generic);
      localStorage.setItem('genericKey', this.model);
      console.log(
        'local storage getitem: ',
        localStorage.getItem('genericKey')
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
    console.log('parent ', localStorage.getItem('genericKey'));
  }
  ngOnDestroy(): void {
    localStorage.removeItem('genericKey');
  }
}
