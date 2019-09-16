import { Component, OnInit, EventEmitter, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
 import { Location } from '@angular/common';
 import { FormGroup, FormControl, Validators } from '@angular/forms';
 import { ActivatedRoute, Router } from '@angular/router';
 import { FieldInput } from '../field-interface';

@Component({
  selector: 'spa-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.sass']
})
export class DynamicFormComponent implements OnInit {
	@Input() vm: any
  @Input() vmDefinition: Array<FieldInput>
  @Input() errorMessage: string
  @Output() search: EventEmitter<any> = new EventEmitter()
 
  form: FormGroup
  status: string
  submitted = false
  vmCopy: any

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  clearForm() {
      const group ={};
      this.vmCopy = Object.assign({}, this.vm);
      this.vmDefinition.forEach(field => {               
        group[field.key] = new FormControl(this.vmCopy[field.key])
      })

      this.form = new FormGroup(group)
  }

  ngOnInit() {
  	this.clearForm()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.status === 'waiting') {
      this.status = ''
    }
  }

  onSearch() {
	  this.submitted = true 
    this.status = 'waiting'
    this.search.emit(this.form)
	}
}
