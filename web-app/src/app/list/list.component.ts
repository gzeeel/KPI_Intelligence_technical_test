import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { RestService } from '../_services/rest.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {

  constructor(
    private rest: RestService
  ) { }

  displayedColumns: string[] = ["id", "lycee", "ville", "titreoperation", "etat_d_avancement", "details"];
  data = [];

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.rest!.getAllInvestments(
            this.sort.active, this.sort.direction);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.resultsLength = data.total_count;

          let start = this.paginator.pageIndex * 30;
          const investmentsToDisplay = data.investments.slice(start, (this.paginator.pageIndex * 30) + 30);

          return investmentsToDisplay;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
}
