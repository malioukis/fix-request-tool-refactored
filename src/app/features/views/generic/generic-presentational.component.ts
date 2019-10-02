import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Generic } from 'src/app/core/services/request-fields.model';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-generic-presentational',
  templateUrl: './generic-presentational.component.html',
  styleUrls: ['./generic-presentational.component.css']
})
export class GenericPresentationalComponent implements OnInit {
  model: any;

  // @Output('model') submit = new EventEmitter.emit(model);
  constructor() {}

  form = new FormGroup({});

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

  viewChanges() {
    const before = JSON.parse(sessionStorage.getItem('genericData'));
    const after = JSON.parse(sessionStorage.getItem('genericSavedData'));
    console.log('before changes   ', before, 'and after  ', after);
  }

  submit(model) {
    console.log(model);
    this.viewChanges();
    sessionStorage.setItem('genericSavedData', JSON.stringify(this.model));
  }
  // onSubmit(model) {
  //   return this.model;
  // }

  ngOnInit() {
    //  this.model = JSON.parse(sessionStorage.getItem('genericData'));
    console.log(this.model);

    this.model = JSON.parse(sessionStorage.getItem('genericData'));
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('genericData');
  }
}
