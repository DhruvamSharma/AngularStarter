import {Component, OnInit} from '@angular/core';

@Component ({
  styleUrls : ['./customer-list.component.css'],
  selector : 'app-customer-list',
  templateUrl : './customer-list.component.html'
})

export class CustomerListComponent implements OnInit {

  _filteredCustomers : any[] = [];
  _customersOrderTotal : number;
  _currencyCode : String = 'INR';

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

}