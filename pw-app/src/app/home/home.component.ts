import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FieldInput } from '../../spa/dynamicForms/field-interface';
import { Transaction } from '../services/transaction-interface';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  TransactionList: Array<Transaction>  
  transactionDefinitionInput: Array<FieldInput> = [
    {
      key: 'recipient',
      type: 'string',
      isId: false,
      label: 'Recipient',
      required: false
    }
  ]   
  errorMessage: string

  constructor(private router: Router, private appDataService: AppDataService, private location: Location) {
      appDataService.getTransactions().subscribe((data) => {
        this.TransactionList = data
      })
  }

  ngOnInit() {
  
  }

  createTransaction() {
    this.router.navigate(['/auth/transaction-detail', 0, 'create'])
  }

  showTransactionDetail(id: number) {
    this.router.navigate(['/auth/transaction-detail', id, 'read'])
  }

  repeatTransaction(id: number) {
    this.router.navigate(['/auth/transaction-detail', id, 'repeat'])
  }

  searchTransaction(event: any) {          
    this.appDataService.searchTransaction(event.target.value).subscribe(success => this.TransactionList = success, error => this.errorMessage = 'No items matched your search')
  }

}
