import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { ContactService, IContact } from '../shared';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];
  dataSource: MatTableDataSource<IContact>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe((contacts) => {
      this.dataSource = new MatTableDataSource<IContact>(contacts);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
