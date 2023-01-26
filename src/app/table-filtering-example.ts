import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen - traditional - NTP22020910SD45D',
    weight: 1.0079,
    symbol: 'H',
  },
  {
    position: 2,
    name: 'Helium - alternative (breakthrough) - NTP22020910SD45D',
    weight: 4.0026,
    symbol: 'He',
  },
  {
    position: 3,
    name: 'Lithium - traditional - NTP22020910SD45D',
    weight: 6.941,
    symbol: 'Li',
  },
  {
    position: 4,
    name: 'Beryllium - alternative (breakthrough) - NTP22020910SD45D',
    weight: 9.0122,
    symbol: 'Be',
  },
  {
    position: 5,
    name: 'Boron - traditional - NTP22020910SD45D',
    weight: 10.811,
    symbol: 'B',
  },
  {
    position: 6,
    name: 'Carbon - alternative (qidp) - NTP22020910SD45D',
    weight: 12.0107,
    symbol: 'C',
  },
  {
    position: 7,
    name: 'Nitrogen - traditional - NTP22020910SD45D',
    weight: 14.0067,
    symbol: 'N',
  },
  {
    position: 8,
    name: 'Oxygen - alternative (breakthrough) - NTP22020910SD45D',
    weight: 15.9994,
    symbol: 'O',
  },
  {
    position: 9,
    name: 'Fluorine - alternative (qidp) - NTP22020910SD45D',
    weight: 18.9984,
    symbol: 'F',
  },
  {
    position: 10,
    name: 'Neon - alternative (qidp) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Sodium - alternative (qidp) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Magnesium - traditional - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Aluminium - alternative (qidp) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Silicon - traditional - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Phosphorus - alternative (qidp) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Sulphur - traditional - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Chlorine - alternative (breakthrough) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Argon - alternative (breakthrough) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Potassium - alternative (qidp) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Calcium - traditional - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Scandium - traditional - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Titanium - alternative (breakthrough) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Vanadium - alternative (breakthrough) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 10,
    name: 'Chromium - alternative (qidp) - NTP22020910SD45D',
    weight: 20.1797,
    symbol: 'Ne',
  },
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
