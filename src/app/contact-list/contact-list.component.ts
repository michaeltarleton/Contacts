import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'phoneNumber', 'email'];
  dataSource: MatTableDataSource<IContacts>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<IContacts>(CONTACTS);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

interface IContacts {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const CONTACTS: IContacts[] = [
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  },
  {
    firstName: 'Sam',
    lastName: 'Dalton',
    phoneNumber: '555-555-1234',
    email: 'sam.dalton@msn.com'
  }
];
