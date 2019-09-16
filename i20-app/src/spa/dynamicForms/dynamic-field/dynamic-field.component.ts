import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldInput } from '../field-interface';
import { AppDataService } from '../../../app/services/app-data.service';

@Component({
  selector: 'spa-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.sass']
})
export class DynamicFieldComponent implements OnInit {
	@Input() field: FieldInput
	@Input() form: FormGroup
	@Input() submitted: boolean
	@Output() getOptions: EventEmitter<any> = new EventEmitter()
	list: Array<any>
	options: any = []

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {

  }

  async changeOption(event: any, field: any) {
  	let options: any = []

 		if (field === 'homeworld') {
 			field = 'planets'
 		}

 		if (field === 'hair_color' || field === 'skin_color' || field === 'eye_color') {
 			let differentOptions: any = this.appDataService.getSubject()
 			
 			differentOptions.source.value.forEach(item => {
        for (var key in item) {
          if (key = field) {
          	let obj = {
          		name: item[key]
          	}
          	options.push(obj)
          }     

          return item[key]
        }
      })

      options = this.uniq(options)     
 		} else {			
	 		options = await this.appDataService.getItems(field, 'options')

			if (field === 'films') {			
				options.forEach(i => i.name = i.title)
			}
		}

		this.options = options
  }

  uniq(a) {
  	const uniqueArray = a.filter((item,index) => {
  		return index === a.findIndex(obj => {
    		return JSON.stringify(obj) === JSON.stringify(item)
  		})
		})

		return uniqueArray
  }
}
