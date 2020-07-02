import { environment } from 'src/environments/environment';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  dtOptions: any = {};
  persons: Person[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      dom: 'Bftr<"wrapper" li>p',
      buttons: [
        // 'columnsToggle', need a propper touch
        // 'colvis',
        // 'copy', // package bugs
        // 'print', // package bugs
        // 'excel', // package bugs
        {
          text: 'Action Button 1',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Action Button  1 activated');
          }
        },
        {
          text: 'Action Button 2',
          key: '2',
          action: function (e, dt, node, config) {
            alert('Action Button  1 activated');
          }
        },
        {
          text: 'Action Button 3',
          key: '3',
          action: function (e, dt, node, config) {
            alert('Action Button  3 activated');
          }
        }
      ],
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            environment.DATATABLE_DATA_URL,
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
  }
}
