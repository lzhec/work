import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../services/transaction-interface';
import { AppDataService } from '../services/app-data.service';
import { FieldInput } from '../../spa/dynamicForms/field-interface';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass']
})
export class TransactionComponent implements OnInit {
	transaction: Transaction
	transactionDefinitionInput: Array<FieldInput> = [
		/*{
			key: 'id',
			type: 'number',
			isId: true,
			label: 'Id',
			required: true
		},*/
		{
			key: 'date',
			type: 'string',
			isId: false,
			label: 'Date',
			required: false
		},
		{
			key: 'username',
			type: 'string',
			isId: false,
			label: 'Recipient',
			required: true
		},		
		{
			key: 'amount',
			type: 'number',
			isId: false,
			label: 'Amount',
			required: true
		}/*,
		{
			key: 'balance',
			type: 'number',
			isId: false,
			label: 'Balance',
			required: false
		}*/
	]

		operation: string //edit, create, read
		errorMessage: string

  constructor(private router: Router, private route: ActivatedRoute, private appDataService: AppDataService) { }

  ngOnInit() {
  	this.operation = this.route.snapshot.params['operation']
  	if (this.operation === 'create') {
  		this.transaction = {id: 0, date: '', username: '', amount: 0, balance: 0}
  	} else {
  		this.appDataService.getTransaction(+this.route.snapshot.params['id']).subscribe((transaction: Transaction) => this.transaction = transaction)
  	}
  }

  createTransaction(transaction: Transaction) {	
  	this.errorMessage = null
  	this.appDataService.createTransaction(transaction).subscribe(success => this.router.navigate(['/auth/home']), error => this.errorMessage = 'Transaction error')
  }
}
