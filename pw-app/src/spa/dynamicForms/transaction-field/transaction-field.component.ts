import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldInput } from '../field-interface';
import { AppDataService } from '../../../app/services/app-data.service';

@Component({
  selector: 'spa-transaction-field',
  templateUrl: './transaction-field.component.html',
  styleUrls: ['./transaction-field.component.sass']
})
export class TransactionFieldComponent implements OnInit {
	@Input() field: FieldInput
	@Input() form: FormGroup
	@Input() operation: string
	@Input() submitted: boolean
	userList:Array<any>
	users: Array<any>

	get isValid() {
		return this.form.controls[this.field.key].valid
	}

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
  	
  }

  changeRecipient(event: any) {
  	if (event.target.value) {
			this.appDataService.getUsers(event.target.value).subscribe((data) => {
				this.userList = data	      
	    })
    }  	
  }

  onChange(event: any) {
  	let elem = document.getElementById('username') as HTMLInputElement
  	elem.value = event 
  	this.form.controls.username.setValue(event)  	
  }

}
